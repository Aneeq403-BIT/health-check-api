const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => { res.json({message: 'Health check API is running. see /health'});});

app.get('/health', (req, res) => { res.json({Status: 'OK', timestamp: new Date().toISOString(),});});

//app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`); });

if (require.main == module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app;