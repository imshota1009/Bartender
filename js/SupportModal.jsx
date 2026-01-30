const SupportModal = ({ onClose }) => {
    const [type, setType] = React.useState('bug');
    const [message, setMessage] = React.useState('');
    const [status, setStatus] = React.useState('idle'); // idle, sending, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('http://localhost:3000/api/report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type,
                    message,
                    sender: 'Player'
                }),
            });

            if (response.ok) {
                setStatus('success');
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                    setMessage('');
                }, 2000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error sending report:', error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="modal-overlay">
                <div className="parchment-modal success-anim">
                    <h2>✉️ 送信完了！</h2>
                    <p>伝書鳩が飛び立ちました。</p>
                    <p>報告ありがとうございます！</p>
                </div>
            </div>
        );
    }

    return (
        <div className="modal-overlay">
            <div className="parchment-modal">
                <button className="close-btn" onClick={onClose}>×</button>
                <h2>📜 ギルドへの直訴状</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>報告の種類:</label>
                        <select value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="bug">🐛 不具合の報告</option>
                            <option value="feature">✨ ご意見・ご要望</option>
                            <option value="other">💌 その他のお問い合わせ</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>内容:</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="ここに詳細を記してください..."
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                        {status === 'sending' ? '🕊️ 伝書鳩を準備中...' : '📮 送信する'}
                    </button>
                    {status === 'error' && <p className="error-msg">送信に失敗しました。鳩が道に迷ったようです。</p>}
                </form>
            </div>
        </div>
    );
};

// Expose to global scope so index.html can render it
window.SupportModal = SupportModal;
