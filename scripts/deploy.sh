echo ${PRIVATE} > /etc/key
ssh-add /etc/key
ssh ${user}@${host}:${port}
cd discord-bot
git pull
npm i
rm /etc/key
exit
