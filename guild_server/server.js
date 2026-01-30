const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files (admin.html)
app.use('/images', express.static(path.join(__dirname, '../images'))); // Serve game images for avatars

// Storage setup
const STORAGE_DIR = path.join(__dirname, 'storage');
const REPORTS_FILE = path.join(STORAGE_DIR, 'reports.json');

if (!fs.existsSync(STORAGE_DIR)) {
    fs.mkdirSync(STORAGE_DIR);
}
if (!fs.existsSync(REPORTS_FILE)) {
    fs.writeFileSync(REPORTS_FILE, '[]');
}

// Routes
// API: Get All Reports (for Admin)
app.get('/api/reports', (req, res) => {
    fs.readFile(REPORTS_FILE, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read archive.' });
        }
        res.json(JSON.parse(data));
    });
});

app.get('/', (req, res) => {
    res.send('Guild Server is running. Send your inquiries via pigeons!');
});


// Character Roster for "Roleplay" Reporting
const CHARACTERS = [
    { name: "Wandering Bard", image: "/images/night/bard_man.png" },
    { name: "Serious Butler", image: "/images/night/butler_man.png" },
    { name: "Ship Captain", image: "/images/night/captain_man.png" },
    { name: "Night Dancer", image: "/images/night/dancer_woman.png" },
    { name: "Gate Guard", image: "/images/night/guard_man.png" },
    { name: "Incognito King", image: "/images/night/king_man.png" },
    { name: "High Priest", image: "/images/night/priest_man.png" },
    { name: "Runaway Princess", image: "/images/night/princess_woman.png" },
    { name: "Tavern Regular", image: "/images/night/tavern_lady.png" },
    { name: "Old Wizard", image: "/images/night/wizard_man.png" }
];

// API: Receive Report
app.post('/api/report', (req, res) => {
    const { type, message } = req.body;

    if (!message || !type) {
        return res.status(400).json({ error: 'Message and Type are required.' });
    }

    // Randomly assign a character persona
    const character = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];

    const newReport = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        type,
        message,
        sender: character.name,           // Use character name instead of "Player"
        senderImage: character.image,     // Add image path
        status: 'received'
    };

    // Save to file (in a real app, use DB)
    fs.readFile(REPORTS_FILE, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read archive.' });
        }

        const reports = JSON.parse(data);
        reports.push(newReport);

        fs.writeFile(REPORTS_FILE, JSON.stringify(reports, null, 2), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Failed to save report.' });
            }
            console.log(`New report received: [${type}] ${message.substring(0, 20)}...`);
            res.status(200).json({ success: true, message: 'Report safely stored.' });
        });
    });
});

// API: Delete Report
app.delete('/api/reports/:id', (req, res) => {
    const id = parseInt(req.params.id);

    fs.readFile(REPORTS_FILE, (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }

        let reports = JSON.parse(data);
        const initialLength = reports.length;
        reports = reports.filter(r => r.id !== id);

        if (reports.length === initialLength) {
            return res.status(404).json({ error: 'Report not found' });
        }

        fs.writeFile(REPORTS_FILE, JSON.stringify(reports, null, 2), (err) => {
            if (err) return res.status(500).json({ error: 'Save failed' });
            res.json({ success: true, message: 'Deleted successfully' });
        });
    });
});

// API: Update Report (Status)
app.patch('/api/reports/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { status } = req.body;

    fs.readFile(REPORTS_FILE, (err, data) => {
        if (err) return res.status(500).json({ error: 'Database error' });

        const reports = JSON.parse(data);
        const report = reports.find(r => r.id === id);

        if (!report) return res.status(404).json({ error: 'Report not found' });

        if (status) report.status = status;

        fs.writeFile(REPORTS_FILE, JSON.stringify(reports, null, 2), (err) => {
            if (err) return res.status(500).json({ error: 'Save failed' });
            res.json({ success: true, report });
        });
    });
});

// API: Get Music List
app.get('/api/music', (req, res) => {
    const jukeboxDir = path.join(__dirname, '../jukebox');

    fs.readdir(jukeboxDir, (err, files) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read jukebox directory.' });
        }

        const tracks = files
            .filter(file => file.toLowerCase().endsWith('.mp3'))
            .map(file => {
                const id = path.parse(file).name; // 'standard_jazz'
                // Formulate a readable name from filename (e.g. "standard_jazz" -> "Standard Jazz")
                // Replace underscores with spaces, capitalize words
                const readableName = id.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

                return {
                    id: id,
                    name: readableName,
                    src: `jukebox/${file}`,
                    icon: '🎵' // Default icon
                };
            });

        res.json(tracks);
    });
});

// Serve Jukebox folder
app.use('/jukebox', express.static(path.join(__dirname, '../jukebox')));

// Start Server
app.listen(PORT, () => {
    console.log(`Guild Server listening on port ${PORT}`);
});
