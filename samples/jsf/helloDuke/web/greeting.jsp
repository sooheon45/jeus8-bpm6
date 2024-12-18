<!--
 The contents of this file are subject to the terms
 of the Common Development and Distribution License
 (the License). You may not use this file except in
 compliance with the License.
 
 You can obtain a copy of the License at
 https://javaserverfaces.dev.java.net/CDDL.html or
 legal/CDDLv1.0.txt. 
 See the License for the specific language governing
 permission and limitations under the License.
 
 When distributing Covered Code, include this CDDL
 Header Notice in each file and include the License file
 at legal/CDDLv1.0.txt.    
 If applicable, add the following below the CDDL Header,
 with the fields enclosed by brackets [] replaced by
 your own identifying information:
 "Portions Copyrighted [year] [name of copyright owner]"
 
 [Name of File] [ver.__] [Date]
 
 Copyright 2005 Sun Microsystems Inc. All Rights Reserved
-->

<HTML>
    <HEAD> <title>Hello</title> </HEAD>
    <%@ taglib uri="http://java.sun.com/jsf/html" prefix="h" %>
    <%@ taglib uri="http://java.sun.com/jsf/core" prefix="f" %>
    <body bgcolor="white">
    <h2>My name is Duke.  What is yours?</h2>
    <jsp:useBean id="UserNameBean" class="helloDuke.UserNameBean" scope="session" />
    <f:view>
    <h:form id="helloForm" >
        <h:graphicImage id="waveImg" url="/wave.med.gif" />
        <h:inputText id="username" value="#{UserNameBean.userName}"/>
        <h:commandButton id="submit" action="success" value="Submit" type="submit" />
    </h:form>
    </f:view>
</HTML>  
