const fetch = require('node-fetch')
const agent = require('./agent')
const url = require('./url')

async function blogReport (blogId, report, token) {
  const res = await fetch(`${url}/reports/blog?blogId=${blogId}`, {
    method: 'POST',
    body: JSON.stringify({ report: report }), // { report: { reportReason: 1, description: 'lund' } }),
    headers: { 'Content-Type': 'application/json', Authorization: token },
    agent
  })
  const body = await res.json()
  return body
}

async function commentReport (commentId, report, token) {
  const res = await fetch(`${url}/reports/comment?commentId=${commentId}`, {
    method: 'POST',
    body: JSON.stringify({ report: report }), // ),
    headers: { 'Content-Type': 'application/json', Authorization: token },
    agent
  })
  const body = await res.json()
  return body
}

module.exports = {
  blogReport,
  commentReport
}
