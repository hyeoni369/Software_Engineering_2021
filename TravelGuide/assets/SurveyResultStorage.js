//설문결과 저장할 class
class SurveyResultStorage {
  constructor() {
    this.recommend = ['attraction', 'nature', 'history', 'park', 'activity']

    this.count = {
      activity: 0,
      nature: 0,
      history: 0,
      park: 0,
      attraction: 0,
    }
  }

  saveSurveyResult(surveyList) {

    for (const survey of surveyList.questions) {
      this.count[survey.part] += survey.answer
    }

    const result = [];

    for (const part in this.count) {
      result.push({ 'part': part, 'score': this.count[part] })
    }

    result.sort(function(a, b) {
      return a.score < b.score ? 1 : a.score > b.score ? -1 : 0;
    })

    for (let i = 0; i < result.length; i++) {
      this.recommend[i] = result[i].part
    }
  }

  getRecentSurveyResult(){
    return this.surveyList;
  }
}

export const surveyResultStorage = new SurveyResultStorage()

export default SurveyResultStorage