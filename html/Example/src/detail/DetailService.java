package detail;

import java.util.List;


public class DetailService {
	
	DetailDAO datailDAO;
	
	DetailService(){
		datailDAO = new DetailDAO();
	}
	
	
	
	   public List<DetailVO> listProducts(){
		   System.out.println("¼­ºñ½º");
		      List<DetailVO> productsList = datailDAO.selectAllProducts();
		      return productsList;
		   }
		
	   public DetailVO viewProduct(int productNo) {
		   DetailVO product = datailDAO.selectProduct(productNo);
		   return product;
	   }
}
