function healthcheck() {
  return (_, res) => {
    return res.send('OK');
  };
}

module.exports = { healthcheck };
