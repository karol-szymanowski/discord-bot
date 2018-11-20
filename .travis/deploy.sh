set -e
ssh -i ~/.ssh/id_rsa -p ${port} ${user}@${host} ./discord-bot.sh
exit
