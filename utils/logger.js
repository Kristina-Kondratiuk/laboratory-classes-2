const getInfoLog = (req) => {
  return `[INFO] ${new Date().toISOString()} - ${req.method} ${req.url}`
};

const getErrorLog = (req) => {
  return `[ERROR] ${new Date().toISOString()} - ${req.method} ${req.url} - Page not found`
};

const getProcessLog = () => {
  return `[PROCESS] ${new Date().toISOString()} - Process terminated`
};

module.exports = {
  getInfoLog,
  getErrorLog,
  getProcessLog,
};
