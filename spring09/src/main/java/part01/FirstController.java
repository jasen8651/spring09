package part01;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FirstController {
	public FirstController() {
		// TODO Auto-generated constructor stub
	}
	
	@RequestMapping("/first.do")
	public String execute() {
		return "part01/first";
	}
}