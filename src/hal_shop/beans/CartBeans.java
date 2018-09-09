package hal_shop.beans;

import java.util.Map;

public class CartBeans {
	private Map<String,Integer> map;

	public Map<String, Integer> getMap() {
		return map;
	}
	
	public void setItem(String key, int value) {
		map.put(key, value);
	}
	
	public void deleteItem(String key) {
		map.remove(key);
	}

}
