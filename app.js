const express = require('express');
const moment = require('moment');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/api', (req, res) => {
  const slack_name=req.query.slack_name;
  const track=req.query.track;
  const githubFileUrl = `https://github.com/Amal-Salam/backend-task-one/blob/main/app.js`;
  const githubRepoUrl = `https://github.com/Amal-Salam/backend-task-one`;

  const response = {
    slack_name,
    currentDay: moment().format('dddd'),
    utcTime:moment().utc().format('YYYY-MM-DDTHH:mm:ssZ'),
    track,
    githubFileUrl,
    githubRepoUrl,
    status_code: 200,
  };
  if (!slack_name || !track) {
    return res
      .status(400)
      .json({
        error: 'please note that slack_name and track parameters are required and note the typing',
      });
  }


  res.json(response);
});


  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
