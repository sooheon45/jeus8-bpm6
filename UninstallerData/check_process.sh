#!/bin/sh
USERNAME=`whoami|awk '{print $1}'`

RUNPROCESS="`ps -ef | grep -w $USERNAME | grep -v grep | grep java | egrep '(/workspace/jeus8-bpm6|jeuservice)' | grep -v Uninstall`"

if [ -z "$RUNPROCESS" ] ; then
echo success
else
echo false >&2
exit 1
fi
exit 0
