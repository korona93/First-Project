package detail;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;


public class DetailDAO {
	
	   private Connection con;   //DB에 연결
	   private PreparedStatement pstmt;   //데이터 베이스 연결 준비 상태
	   private DataSource dataFactory;  // DB의 데이터를 담는 변수
	   
	   public DetailDAO() {     
		      try {
		         Context ctx = new InitialContext();   // 웹 어플리케이션이 처음으로 배치될때 설정되고 모든 설정된 엔트리와 자원은 
		         Context envContext = (Context)ctx.lookup("java:/comp/env");    //java:/comp/env 여기에 놓이게 된다.
		         
		         
		         dataFactory = (DataSource)envContext.lookup("jdbc/oracle");
		      } catch (Exception e) {
		         e.printStackTrace();
		      }
		   }
	   
	   public List<DetailVO> selectAllProducts() {
		      List<DetailVO> productsList = new ArrayList<DetailVO>();    
		      System.out.println("가나다라");
		      try {
		         con = dataFactory.getConnection();       //DB에 연결하기 위함

		         String query = "select productNo, productImg, colorOne, colorTwo, "
		        		 			+"colorThree, productName, productPrice "
		        		 			+"from t_product "; 
	         
		         System.out.println(query);   //쿼리문을 확인하기 위한 출력문
		         pstmt = con.prepareStatement(query);   //pstmt에 쿼리를 담아
		         ResultSet rs = pstmt.executeQuery(query);  // 쿼리를 적용

		         while(rs.next()) {
		            int productNo = rs.getInt("productNo");
		            String productImg = rs.getString("productImg");
		            String colorOne = rs.getString("colorOne");
		            String colorTwo = rs.getString("colorTwo");
		            String colorThree = rs.getString("colorThree");
		            String productName = rs.getString("productName");
		            int productPrice = rs.getInt("productPrice");
		            System.out.println(productNo);
		            
		            //ArticleVO를 이용하여 값을 받아 
		            DetailVO product = new DetailVO(productNo, productImg, colorOne, colorTwo, colorThree, productName, productPrice);
		            productsList.add(product);  //articlesList에 값을 추가해줌
		            
		         }
		         rs.close();     //ResultSet닫기
		         pstmt.close();  //prepareStatement 닫기
		         con.close();  //Connection닫기

		      }catch (Exception e) {   //모든 예외발생시 예외 보여줘~
		         e.printStackTrace();
		      }
		      for(int i=0; i<productsList.size(); i++) {
		    	  System.out.println(productsList.get(i));
		      }
		      
		      return productsList;  //  함수종료/반환값 articlesList
		   }
	   
	   public DetailVO selectProduct(int productNo) { //articleNo를 매개변수로 이용하여

		   DetailVO product = new DetailVO(); // 기본생성자로 객체 생성, 전역변수로 사용

		      try {

		         con = dataFactory.getConnection();   //DB연결
		         String query = "select productNo, productImg, colorOne, colorTwo, "
		        		 			+"colorThree, productName, productPrice "
		        		 			+"from t_product "
		        		 			+ "where productNo=?";
		         System.out.println(query); //쿼리문 출력(맞게썻는지)
		         pstmt = con.prepareStatement(query);//query를 con객체를 이용하여 db에 쿼리문을 보냄
		         pstmt.setInt(1, productNo);  //articleNo를 첫번째로 받는다
		         ResultSet rs = pstmt.executeQuery();//보낸 쿼리문에 대한 결과를 rs객체를 이용하여 받음

		         
		         rs.next(); // 커서를 0번째 행에서 1번째 행으로 이동

		         //DB에서 데이터를 받음!
		          int no = rs.getInt("productNo");
		          String productImg = rs.getString("productImg");
		          String colorOne = rs.getString("colorOne");
		          String colorTwo = rs.getString("colorTwo");
		          String colorThree = rs.getString("colorThree");
		          String productName = rs.getString("productName");
		          int productPrice = rs.getInt("productPrice");
		          
		         //article에 받은것을 뿌려줌
		         product.setProductNo(no);
		         product.setProductImg(productImg);
		         product.setColorOne(colorOne);
		         product.setColorTwo(colorTwo);
		         product.setColorThree(colorThree);
		         product.setProductName(productName);
		         product.setProductPrice(productPrice);
		         
		         rs.close();  //ResultSet닫아줌
		         pstmt.close(); //prepareStatement
		         con.close(); //Connection

		      } catch (Exception e) {
		         // TODO: handle exception
		    	  e.printStackTrace();
		      }

		      return product;
		   }
}


