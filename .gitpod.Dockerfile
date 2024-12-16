FROM gitpod/workspace-full

# SDKMAN 설치
RUN curl -s "https://get.sdkman.io" | bash

# SDKMAN 초기화
RUN bash -c "source $HOME/.sdkman/bin/sdkman-init.sh && \
    sdk install java 8.0.302-open && \
    sdk default java 8.0.302-open"

# 환경 변수 설정
ENV JAVA_HOME=/home/gitpod/.sdkman/candidates/java/current
ENV PATH="$JAVA_HOME/bin:$PATH"