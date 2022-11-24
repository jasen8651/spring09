package part02;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class NameContorller {
	
	public NameContorller() {
		// TODO Auto-generated constructor stub
	}
	
	@RequestMapping(value="/name.do", method = RequestMethod.GET)
	public String execute() {
		return "part02/from";
	}
	
	@RequestMapping(value="/name.do", method = RequestMethod.POST)
	public ModelAndView process(String name, ModelAndView mav) {
		System.out.println(name);
		mav.addObject("name",name);
		mav.setViewName("part02/res");
		return mav;
	}
}
