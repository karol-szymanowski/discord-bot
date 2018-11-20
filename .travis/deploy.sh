set -e
ssh ${user}@${host}:${port}
cd discord-bot
git pull
npm i
pm2 restart discord-bot
exit
