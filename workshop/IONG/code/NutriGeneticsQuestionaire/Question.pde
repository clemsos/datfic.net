class Question {
  String profileProperty;
  String prompt;
  StringDict answers;
  int selectedAnswer;

  RadioButton buttons;
  Question(String tProfileProperty, String tPrompt, StringDict tAnswers) {
    profileProperty = tProfileProperty;
    prompt = tPrompt;
    answers = tAnswers;
    String[] answerLabels = answers.keyArray(); 
    buttons = cp5.addRadioButton("radioButton")
      .setPosition( width/2-(textWidth(prompt)/2), height/2)
      .setSize(int(textWidth(prompt)), 50)
      .setColorLabel(color(0));

    for (int i = 0; i < answers.size(); i++) {
      buttons.addItem(answerLabels[i], float(answers.get(answerLabels[i])));
    }
    selectedAnswer = 0;
  } 

  void display() {
    fill(0);
    textSize(30);
    text(prompt, width/2-(textWidth(prompt)/2), height/2-50);
  }

  void validate() {
    boolean changeProfile = false;
    if (selectedAnswer == 1) {
      changeProfile = true;
    } else {
      changeProfile = false;
    }
    patient.profileMap.put(profileProperty, changeProfile);
    beep.play();
    beep.rate(0.5);
  }
}