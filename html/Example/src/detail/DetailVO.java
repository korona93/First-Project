package detail;

public class DetailVO {
	   private int productNo;
	   private String productImg;
	   private String colorOne;
	   private String colorTwo;
	   private String colorThree;
	   private String productName;
	   private int productPrice;
	   private String category;
	   private String type;
	   private String subtype;
	      
	public DetailVO() {
		
	}
	
	public DetailVO(int productNo, String productImg, String colorOne, String colorTwo, String colorThree,
			String productName, int productPrice) {
		super();
		this.productNo = productNo;
		this.productImg = productImg;
		this.colorOne = colorOne;
		this.colorTwo = colorTwo;
		this.colorThree = colorThree;
		this.productName = productName;
		this.productPrice = productPrice;
	}

	public DetailVO(int productNo, String productImg, String colorOne, String colorTwo, String colorThree,
			String productName, int productPrice, String category, String type, String subtype) {
		this.productNo = productNo;
		this.productImg = productImg;
		this.colorOne = colorOne;
		this.colorTwo = colorTwo;
		this.colorThree = colorThree;
		this.productName = productName;
		this.productPrice = productPrice;
		this.category = category;
		this.type = type;
		this.subtype = subtype;
	}


	public int getProductNo() {
		return productNo;
	}
	public void setProductNo(int productNo) {
		this.productNo = productNo;
	}
	public String getProductImg() {
		return productImg;
	}
	public void setProductImg(String productImg) {
		this.productImg = productImg;
	}
	public String getColorOne() {
		return colorOne;
	}
	public void setColorOne(String colorOne) {
		this.colorOne = colorOne;
	}
	public String getColorTwo() {
		return colorTwo;
	}
	public void setColorTwo(String colorTwo) {
		this.colorTwo = colorTwo;
	}
	public String getColorThree() {
		return colorThree;
	}
	public void setColorThree(String colorThree) {
		this.colorThree = colorThree;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public int getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(int productPrice) {
		this.productPrice = productPrice;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getSubtype() {
		return subtype;
	}
	public void setSubtype(String subtype) {
		this.subtype = subtype;
	}
	   
	   
}
