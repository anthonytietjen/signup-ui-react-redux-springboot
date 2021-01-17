package com.crowdstreettakehome.server;

import java.util.ArrayList;
import java.util.Dictionary;
import java.util.Hashtable;
import java.util.Map.Entry;

import com.crowdstreettakehome.server.dto.ThingDTO;

public class ThingStorage {
  private static Hashtable<String, ThingDTO> storage;

  public static Hashtable<String, ThingDTO> getStorage() {
    if(storage == null){
      storage = new Hashtable<String, ThingDTO>();
    }
    return storage;
  }
}