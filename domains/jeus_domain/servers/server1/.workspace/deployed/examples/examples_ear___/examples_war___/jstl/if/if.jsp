<%@ page contentType="text/html; charset=euc-kr" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%@ include file="../../upper.jsp"%>

<br>
<h2> &lt;if&gt; Test</h2>
<br>
<h5> Please choice one</h5>
<form action="if.jsp" method="GET">
<select name="rainbow" id="color">
<option value="colors" selected=true>Rainbow Colors
<option value="red">Red
<option value="orange">Oranage
<option value="yellow">Yellow
<option value="green">Green
<option value="blue">Blue
<option value="indigo">Indigo
<option value="violet">Violet
</select>
<br>

<input type="submit">
</form>
<br><br>
<c:if test="${param.rainbow == 'red'}"><font color="red">Red Color</font></c:if>
<c:if test="${param.rainbow == 'orange'}"><font color="orange">Orange Color</font></c:if>
<c:if test="${param.rainbow == 'yellow'}"><font color="yellow">Yellow Color</font></c:if>
<c:if test="${param.rainbow == 'green'}"><font color="green">Green Color</font></c:if>
<c:if test="${param.rainbow == 'blue'}"><font color="blue">Blue Color</font></c:if>
<c:if test="${param.rainbow == 'indigo'}"><font color="indigo">Indigo Color</font></c:if>
<c:if test="${param.rainbow == 'violet'}"><font color="violet">Violet Color</font></c:if>
<c:if test="${param.rainbow == 'colors'}"><font color="black">Choice color</font></c:if>

<%@ include file="../../footer.html" %>