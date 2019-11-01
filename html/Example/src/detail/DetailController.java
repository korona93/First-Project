package detail;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



/**
 * Servlet implementation class DetailController
 */
@WebServlet("/detail/*")
public class DetailController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	DetailService detailService;
	DetailVO detailVO;
	
	/**
	 * @see Servlet#init(ServletConfig)
	 */
	public void init(ServletConfig config) throws ServletException {
		// TODO Auto-generated method stub
		detailService = new DetailService();
		detailVO = new DetailVO();
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doHandle(request,response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doHandle(request,response);
	}

	private void doHandle(HttpServletRequest request, HttpServletResponse response)  throws ServletException, IOException{
		// TODO Auto-generated method stub
		
		String nextPage = "";    
		request.setCharacterEncoding("utf-8"); 
		response.setContentType("text/html;charset=utf-8"); 
		String action = request.getPathInfo();
		System.out.println("action : " + action); 
		
		try {
			System.out.println("��");
			List<DetailVO> productsList = new ArrayList<DetailVO>();      //Arraylist ���� ��ü ����
			System.out.println("��");
			if(action != null && action.equals("/listProducts.do")) { 
				System.out.println("��");
				productsList = detailService.listProducts();
				request.setAttribute("productsList", productsList);
				nextPage = "/html/productForm.jsp";
				System.out.println("[1]" + nextPage);
				
			} else {
				System.out.println("��");
				productsList = detailService.listProducts();
				System.out.println("����");
				request.setAttribute("productsList", productsList);
				nextPage = "/html/productForm.jsp";
				System.out.println("[2]" + nextPage);
			}
			
			RequestDispatcher dispatch = request.getRequestDispatcher(nextPage);   
			dispatch.forward(request, response);  //dispatch�� forward! �����ش�!
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
