//생성자로 part, quesiton 받음
//answer은 기본값 0
class Survey {
  constructor(part, question){
    this.part = part;
    this.question = question;
    this.answer = 0;
  }
}

class SurveyStorage {
  constructor(){
    this.questions = []

    this.questions.push(new Survey('activity', "활동적인 것을 좋아합니까?"))
    this.questions.push(new Survey('nature', "자연 경관을 좋아합니까?"))
    this.questions.push(new Survey('history', "역사를 좋아합니까?"))
    this.questions.push(new Survey('attraction', "유명한 곳을 가고 싶습니까?"))
    this.questions.push(new Survey('park', "공원이나 테마파크를 좋아합니까?"))
    this.questions.push(new Survey('history', "한국의 전통 복장이나 건물에 관심이 있습니까?"))
    this.questions.push(new Survey('activity', "색다른 경험을 하고 싶습니까?"))
    this.questions.push(new Survey('attraction', "지역의 랜드마크를 가고 싶습니까?"))
    this.questions.push(new Survey('park', "산책, 걷는 것을 좋아합니까?"))
    this.questions.push(new Survey('nature', "멋진 풍경을 보고 싶습니까?"))
  }

  reset() {
    for(let i = 0; i < this.questions.length; i++){
      this.questions[i].answer = 0
    }
  }
}

export const surveyList = new SurveyStorage()