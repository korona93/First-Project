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
	
	   private Connection con;   //DB�� ����
	   private PreparedStatement pstmt;   //������ ���̽� ���� �غ� ����
	   private DataSource dataFactory;  // DB�� �����͸� ��� ����
	   
	   public DetailDAO() {     
		      try {
		         Context ctx = new InitialContext();   // �� ���ø����̼��� ó������ ��ġ�ɶ� �����ǰ� ��� ������ ��Ʈ���� �ڿ��� 
		         Context envContext = (Context)ctx.lookup("java:/comp/env");    //java:/comp/env ���⿡ ���̰� �ȴ�.
		         
		         
		         dataFactory = (DataSource)envContext.lookup("jdbc/oracle");
		      } catch (Exception e) {
		         e.printStackTrace();
		      }
		   }
	   
	   public List<DetailVO> selectAllProducts() {
		      List<DetailVO> productsList = new ArrayList<DetailVO>();    
		      System.out.println("�����ٶ�");
		      try {
		         con = dataFactory.getConnection();       //DB�� �����ϱ� ����

		         String query = "select productNo, productImg, colorOne, colorTwo, "
		        		 			+"colorThree, productName, productPrice "
		        		 			+"from t_product "; 
	         
		         System.out.println(query);   //�������� Ȯ���ϱ� ���� ��¹�
		         pstmt = con.prepareStatement(query);   //pstmt�� ������ ���
		         ResultSet rs = pstmt.executeQuery(query);  // ������ ����

		         while(rs.next()) {
		            int productNo = rs.getInt("productNo");
		            String productImg = rs.getString("productImg");
		            String colorOne = rs.getString("colorOne");
		            String colorTwo = rs.getString("colorTwo");
		            String colorThree = rs.getString("colorThree");
		            String productName = rs.getString("productName");
		            int productPrice = rs.getInt("productPrice");
		            System.out.println(productNo);
		            
		            //ArticleVO�� �̿��Ͽ� ���� �޾� 
		            DetailVO product = new DetailVO(productNo, productImg, colorOne, colorTwo, colorThree, productName, productPrice);
		            productsList.add(product);  //articlesList�� ���� �߰�����
		            
		         }
		         rs.close();     //ResultSet�ݱ�
		         pstmt.close();  //prepareStatement �ݱ�
		         con.close();  //Connection�ݱ�

		      }catch (Exception e) {   //��� ���ܹ߻��� ���� ������~
		         e.printStackTrace();
		      }
		      for(int i=0; i<productsList.size(); i++) {
		    	  System.out.println(productsList.get(i));
		      }
		      
		      return productsList;  //  �Լ�����/��ȯ�� articlesList
		   }
	   
	   public DetailVO selectProduct(int productNo) { //articleNo�� �Ű������� �̿��Ͽ�

		   DetailVO product = new DetailVO(); // �⺻�����ڷ� ��ü ����, ���������� ���

		      try {

		         con = dataFactory.getConnection();   //DB����
		         String query = "select productNo, productImg, colorOne, colorTwo, "
		        		 			+"colorThree, productName, productPrice "
		        		 			+"from t_product "
		        		 			+ "where productNo=?";
		         System.out.println(query); //������ ���(�°ԛ�����)
		         pstmt = con.prepareStatement(query);//query�� con��ü�� �̿��Ͽ� db�� �������� ����
		         pstmt.setInt(1, productNo);  //articleNo�� ù��°�� �޴´�
		         ResultSet rs = pstmt.executeQuery();//���� �������� ���� ����� rs��ü�� �̿��Ͽ� ����

		         
		         rs.next(); // Ŀ���� 0��° �࿡�� 1��° ������ �̵�

		         //DB���� �����͸� ����!
		          int no = rs.getInt("productNo");
		          String productImg = rs.getString("productImg");
		          String colorOne = rs.getString("colorOne");
		          String colorTwo = rs.getString("colorTwo");
		          String colorThree = rs.getString("colorThree");
		          String productName = rs.getString("productName");
		          int productPrice = rs.getInt("productPrice");
		          
		         //article�� �������� �ѷ���
		         product.setProductNo(no);
		         product.setProductImg(productImg);
		         product.setColorOne(colorOne);
		         product.setColorTwo(colorTwo);
		         product.setColorThree(colorThree);
		         product.setProductName(productName);
		         product.setProductPrice(productPrice);
		         
		         rs.close();  //ResultSet�ݾ���
		         pstmt.close(); //prepareStatement
		         con.close(); //Connection

		      } catch (Exception e) {
		         // TODO: handle exception
		    	  e.printStackTrace();
		      }

		      return product;
		   }
}


