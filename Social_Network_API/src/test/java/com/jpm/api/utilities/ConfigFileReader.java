package com.jpm.api.utilities;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;

public class ConfigFileReader {
	private String propFileName = null;

	public ConfigFileReader(String FileName) {
		propFileName = FileName;
	}

	public String getProperty(String Key) {
		String result = "";

		try {
			Properties prop = new Properties();
			InputStream inputStream = new FileInputStream(propFileName);
			prop.load(inputStream);
			result = prop.getProperty(Key);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
}