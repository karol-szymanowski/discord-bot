set -e
ssh -p ${port} ${user}@${host} pwd
cd discord-bot
git pull
npm i
pm2 restart discord-bot
exit
