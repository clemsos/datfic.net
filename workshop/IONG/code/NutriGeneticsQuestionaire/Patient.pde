class Patient {
  HashMap<String, Boolean> profileMap = new HashMap<String, Boolean>();

  Patient() {
    profileMap.put("cat", false);
    profileMap.put("dog", false);
    profileMap.put("phone", false);
    profileMap.put("smoke", false);
    profileMap.put("rash", false);
    profileMap.put("atheist", false);
    profileMap.put("jew", false);
    profileMap.put("right", false);
  }
}