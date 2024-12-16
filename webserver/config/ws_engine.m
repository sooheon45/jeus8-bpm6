*DOMAIN
jeuservice

*NODE
7f0bf70fbac7
  WebtoBDir = "/workspace/jeus8-bpm6/webserver",
  SHMKEY = 54000,
  Docroot = "/workspace/jeus8-bpm6/webserver/docs",
  Port = "8080",
  #Nodename= "$(NODENAME)",
  HTH = 1,
  Logging = "accesslog",
  ErrorLog = "errorlog",
  SysLog = "systemlog",
  JsvPort = 9900

*HTH_THREAD
hworker
  WorkerThreads = 8

*SVRGROUP
htmlg
  SvrType = HTML
jsvg
  SvrType = JSV

*SERVER
default
  SvgName = jsvg,
  Minproc = 5,
  MaxProc = 5

*URI
examples
  Uri = "/examples/",
  SvrType = JSV

*EXT
htm
  Mimetype = "text/html",
  SvrType = HTML
html
  Mimetype = "text/html",
  SvrType = HTML
jsp
  Mimetype = "application/jsp",
  SvrType = JSV

*LOGGING
accesslog
  Format = "default",
  Filename = "/workspace/jeus8-bpm6/webserver/log/access_%Y%%M%%D%.log",
  Option="Sync"
errorlog
  Format = "ERROR",
  Filename = "/workspace/jeus8-bpm6/webserver/log/error_%Y%%M%%D%.log"
systemlog
  Format = "SYSLOG",
  Filename = "/workspace/jeus8-bpm6/webserver/log/system_%Y%%M%%D%.log"

