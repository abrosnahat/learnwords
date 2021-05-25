const getTranslateWord = async (text, lang = 'en-ru') => {
    const res = await fetch('https://translate.api.cloud.yandex.net/translate/v2/translate', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer t1.9euelZrPlYyaisrIkJfJlcyYzs6cxu3rnpWajouVyYuanc6XnpCRjZXHlYnl8_dDLUt6-e9lPAJx_d3z9wNcSHr572U8AnH9.sUDZqIsKfhyAtWhSwC1GL_5l7vJ5ouT1abkd-TpuGqUs7DQwz9cqCLC3_-cVMxnB3zjPmx72jXTbgAZzsxgxAw",
            "Content-Type": "application/json",
          
        },
        body: JSON.stringify({
            "folderId": "b1gn232chl1recmaahun",
            "targetLanguageCode": "ru",
            "texts": [ "string" ]
        })
    })
  

    return res;

}

export default getTranslateWord;