const express = require('express');
const moment = require('moment');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/api', (req, res) => {
  const slack_name=req.query.slack_name;
  const track=req.query.track;
  const github_file_url = `https://github.com/Amal-Salam/backend-task-one/blob/main/app.js`;
  const github_repo_url = `https://github.com/Amal-Salam/backend-task-one`;

  const response = {
    slack_name,
    current_day: moment().format('dddd'),
    utc_time:moment().utc().format('YYYY-MM-DDTHH:mm:ssZ'),
    track,
    github_file_url,
    github_repo_url,
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
