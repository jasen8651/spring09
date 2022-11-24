package part03;


import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;

public class EmployessDAOImp implements EmployessDAO{
	private SqlSessionTemplate sqlSession;
	
	public EmployessDAOImp() {
		// TODO Auto-generated constructor stub
	}
	
	public void setSqlSession(SqlSessionTemplate sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	@Override
	public List<EmployessDTO> search(String data) {
		// TODO Auto-generated method stub
		return sqlSession.selectList("emp.search", data);
	}
}
