package part03;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

//http://localhost:8090/myapp/empsearch.do
@Controller
public class EmpContorller {
	private EmployessDAO dao;
	
	public EmpContorller() {
		// TODO Auto-generated constructor stub
	}
	
	public void setDao(EmployessDAO dao) {
		this.dao = dao;
	}
	@RequestMapping(value="/empsearch.do", method = RequestMethod.GET)
	public String execute() {
		
		return "part03/empList";
	}
	@ResponseBody
	@RequestMapping(value="/empsearch.do", method = RequestMethod.POST)
	public List<EmployessDTO> process(String data){
		System.out.println(data);
		System.out.println(dao.search(data));
		return dao.search(data);
	}
}
