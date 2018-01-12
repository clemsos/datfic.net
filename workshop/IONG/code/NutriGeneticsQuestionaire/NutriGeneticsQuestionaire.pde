import processing.sound.*;
import java.util.Map;
import controlP5.*;

ControlP5 cp5;
SoundFile beep;

ArrayList<Question> questions = new ArrayList<Question>();
Patient patient;
Question currentQuestion;

int scene;
PImage logo;
boolean vCat, vDog, vPhone, vSmoke, vRash, vAtheist, vJew, vRight;

void setup() {
  size(1680, 1040);
  pixelDensity(displayDensity());
  PFont font = createFont("monospaced", 8);
  textFont(font);
  cp5 = new ControlP5(this);
  cp5.setFont(font);
  patient = new Patient();
  currentQuestion = newQuestion();
  scene = 0;
  logo = loadImage("logo.jpg");
  beep = new SoundFile(this, "beep.wav");
}

void draw() {
  background(255);
  image(logo, -50, -10, 420, 295);
  fill(0);
  textSize(30);
  text("OING", 390, 80);
  text("Questionnaire NCF2018C188786 – FR", 390, 120);
  text("User – Dr. G.P Hoskins", 390, 200);
  text("Date – 12.02.2018", 390, 230);
  text("CONFIDENTIAL", width-400, 80);
  text("This test has been certified by the IONG", 50, height-50);
  currentQuestion.display();

  if (scene >= 11) {
    displayResults();
  }
}

Question newQuestion() {
  String profileProperty = "";
  String prompt = "";
  StringDict answers = new StringDict(); 
  switch (scene) {
  case 0: 
    profileProperty = "cat";
    prompt = "Consommez-vous du café?";
    answers.set("OUI", "0");
    answers.set("NON", "0");
    break;
  case 1: 
    profileProperty = "cat";
    prompt = "En une journée, combien en consommez-vous?";
    answers.set("Moins de 3", "0");
    answers.set("3-6", "1");
    answers.set("Plus de 6", "1");
    break;
  case 2: 
    profileProperty = "dog";
    prompt = "Avez-vous consommé des rouleaux de printemps ces 12 derniers mois?";
    answers.set("OUI", "0");
    answers.set("NON", "0");
    break;
  case 3: 
    profileProperty = "dog";
    prompt = "Combien en avez-vous mangé?";
    answers.set("Moins de 4", "0");
    answers.set("4-8", "0");
    answers.set("Plus de 8", "1");
    break;
  case 4: 
    profileProperty = "phone";
    prompt = "Ajoutez-vous de sel sur vos plats?";
    answers.set("OUI", "0");
    answers.set("NON", "1");
    break;
  case 5:
    profileProperty = "smoke";
    prompt = "Avez vous consommé de la limonade ces 12 deniers mois?";
    answers.set("OUI", "0");
    answers.set("NON", "0");
    break;
  case 6:
    profileProperty = "smoke";
    prompt = "Combien de fois en avez vous consommé ces 30 derniers jours?";
    answers.set("1-4", "0");
    answers.set("Plus de 4", "1");
    break;
  case 7:
    profileProperty = "rash";
    prompt = "consommez régulièrement des sodas?";
    answers.set("OUI", "0");
    answers.set("NON", "1");
    break;
  case 8:
    profileProperty = "atheist";
    prompt = "Enlevez-vous le gras de votre steak avant de le consommer?";
    answers.set("OUI", "1");
    answers.set("NON", "0");
    break;

  case 9:
    profileProperty="jew";
    prompt = "Consommez-vous des tomates crues?";
    answers.set("OUI", "1");
    answers.set("NON", "0");
    break;

  case 10:
    profileProperty = "right";
    prompt = "Combien de fois avez-vous consommé des fruits de mer ces 12 derniers mois? ";
    answers.set("Moins de 4", "0");
    answers.set("4-8", "1");
    answers.set("Plus de 8", "1");
    break;
  }

  Question question = new Question(profileProperty, prompt, answers);
  questions.add(question);
  return question;
}

void controlEvent(ControlEvent event) {
  if (event.isFrom(currentQuestion.buttons)) {
    print("got an event from "+event.getName()+"\t");
    for (int i=0; i<event.getGroup().getArrayValue().length; i++) {
      print(int(event.getGroup().getArrayValue()[i]));
    }
    println("\t "+event.getValue());
    currentQuestion.selectedAnswer = int(event.getGroup().getValue());
  }
}

void displayResults() {
  fill(0);
  textSize(30);
  int xPos = width/2 - 170;
  int yPos = height/3-30;
  vCat = patient.profileMap.get("cat");
  text("Chat" + " = " + vCat, xPos, yPos+60);
  vDog = patient.profileMap.get("dog");
  text("Chien" + " = " + vDog, xPos, yPos+120);
  vPhone = patient.profileMap.get("phone");
  text("Operateur" + " = " + vPhone, xPos, yPos+180);
  vSmoke = patient.profileMap.get("smoke");
  text("Fumeur" + " = " + vSmoke, xPos, yPos+240);
  vRash = patient.profileMap.get("rash");
  text("Rougeur" + " = " + vRash, xPos, yPos+300);
  vAtheist = patient.profileMap.get("atheist");
  text("Athée" + " = " + vAtheist, xPos, yPos+360);
  vJew = patient.profileMap.get("jew");
  text("Juif" + " = " + vJew, xPos, yPos+420);
  vRight = patient.profileMap.get("right");
  text("Droitier" + " = " + vRight, xPos, yPos+480);
}

void keyPressed() {
  if (key == ENTER) {
    currentQuestion.validate();
    questions.remove(currentQuestion);
    scene++;
    currentQuestion = newQuestion();
  }
}
