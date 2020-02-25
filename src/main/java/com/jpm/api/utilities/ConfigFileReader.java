package com.jpm.api.utilities;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;

public class ConfigFileReader extends BaseUtils {
	private String propFileName = null;

	public ConfigFileReader(String FileName) {
		propFileName = FileName;
		logger("File Name is set for System Read: "+FileName);
	}

	public String getProperty(String Key) {
		String result = "";

		try {
			Properties prop = new Properties();
			InputStream inputStream = new FileInputStream(propFileName);
			prop.load(inputStream);
			result = prop.getProperty(Key);
			logger("Read the property from file is: "+ result);
		} catch (Exception e) {
			e.printStackTrace();
			logger("Exception occured during file read: "+e);
		}
		return result;
	}
}