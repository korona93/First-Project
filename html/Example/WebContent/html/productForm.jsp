<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}" />    

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상품보여주기</title>
<link rel="stylesheet" href="../css/exam.css"></script>
</head>
<style>
/* reset CSS */
*{margin:0; padding:0;}
ul li{list-style: none;}
a{outline:0; text-decoration: none; color:#000;}
img{border:0;}
body{
    font:12px/1.6 arial; color:#000;
    width: 970px;
}

.productBox{
    display:inline-block;
    width: 200px;
    height: 270px;
    margin: 20px 0 0 30px;
}
.coninfo{
    width:100%;
}
.imgsize{
    width:200px;
    height: 300px;
}
.colorG{
    margin-left: 5px;
}
.rd{
    display:none;
}
.lb{
    display: inline-block;
    height: 10px;
    width: 10px;
}
#lb1{
    background-color: chartreuse;
}
#lb2{
    background-color: cyan;
}
#lb3{
    background-color: darkorchid;
}
.chk{
    float: right;
}
.productN{
    /* margin-left: 5px; */
    width:100px;
}
.productP{
    /* margin-left: 5px; */
}
</style>
<body>
	<form action="product.do" method="get" name="frm">
	<h1>상품목록</h1>
	<c:forEach items="${productsList}" var="product"  varStatus="productsNum">
	    <div class="productBox" >
	        <a><img class="imgsize" src="${contextPath}/image/detail_search/${product.productImg}"></a> 
	        <div class="coninfo">
	            <div class="colorG">

	            	<c:if test="${product.colorOne != Null }">
	            	    <label id="lb1" class="lb" for="col1" bgcolor="${product.colorOne}"></label><input class="rd" id="col1" type="radio" name="color">
	                </c:if>
	                <c:if test="${product.colorTwo != Null}">
	            	    <label id="lb2" class="lb" for="col2" bgcolor="${product.colorTwo}"></label><input class="rd" id="col2" type="radio" name="color">
	                </c:if>
	                <c:if test="${product.colorThree != Null}">
	              	    <label id="lb3" class="lb" for="col3" bgcolor="${product.colorThree}"></label><input class="rd" id="col3" type="radio" name="color">
	                </c:if>

	                <input class="chk" type="checkbox">
	            </div>
	            <div>
	                <a class="productN"><span>${product.productName}</span></a>
	            </div>
	            <div class="productP"><a>${product.productPrice}</a></div>
	        </div>
	    </div>
	</c:forEach>
	</form>
</body>
</html>