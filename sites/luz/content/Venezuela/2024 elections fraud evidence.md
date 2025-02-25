---
title: Maduro stole Venezuela's election - the evidence
ogimage: ogmaduro.png
date: 2024-08-28
---

![[ogmaduro.png]]

Unfair and unfree presidential elections were held in Venezuela on 28 July 2024. Despite adverse circumstances, the democratic opposition **won the election against dictator [[Nicolás Maduro]]**. How can we be sure of this? Here is the evidence **sorted by how strong and relevant** I think the evidence is.

## Brief explanation of the electronic voting system

**Substantive factual evidence requires a basic understanding** of Venezuela's electoral system. Therefore a short explanation. 

The core of the semi-automatic **voting system in Venezuela is technically quite robust**. It is based on the fact that votes are recorded on paper and electronically in parallel and can be verified **independently**.

1) All voting machines operate autonomously on election day. They only totalise, transmit and print their vote count when they are closed at the end of polling day.
2) Poll workers, which are randomly selected among voters, and the registered witnesses of the political parties (both government and opposition) should receive this **vote count from their voting machines (the 'actas de escrutinio')**. Here is an example of such an 'acta' - hundreds of Venezuelans have [shared photos of their actas on social media](https://x.com/DavidRomro/status/1817782928279007350).
	![[elections2024-fraud-evidence-2024-08-24-13.30.23.excalidraw]]

3) The electoral authority should then publish the data **broken down by polling station and voting machine**. That way anyone with an 'acta' **can independently verify the data**.
4) Importantly, each 'acta' has a **digital fingerprint formed from the voting data and a secret key that each machine chooses individually at random**. After election day, the electoral authority CNE has access to these secret keys. In other words, **the electoral authority can verify with little effort whether an 'acta' or a picture of it is real or fake**.

[^asym]: From a technical point of view, the problem is that a 'symmetric' encryption method is used here (HMAC-SHA256). An asymmetric method such as RSA would be better, so that the validity of the 'actas' can be checked independently. This would be similar to the SSL certificates that web servers need to prove their identity.

![[elections2024-fraud-evidence-2024-08-25-01.05.20.excalidraw]]

## Collected 'actas' show: González won

The opposition succeeded [despite the dictatorship's obstruction](https://youtu.be/pb6L451bnkk?si=8Hk4A7ymGKmXwAoE&t=194) in collecting **over 80 per cent of the 'actas' in the polling stations** and publishing them on https://resultadosconvzla.com/. Civil disobedience by election workers and military units helped in some cases.

![[2024-07-29-20240808085918.png]]

According to these 'actas', **opposition candidate Edmundo González Urrutia received 67 per cent of the vote and Maduro 30 per cent**. Several organisations, including [the Associated Press](https://apnews.com/article/venezuela-maduro-machado-biden-gonzalez-a625eb01979bc9cf5570d03242f198b1), have verified that the published 'actas' have been correctly read out and added up. An independent web developer extracted the votes from the scanned 'actas' the opposition gathered and offers the detailed results on [macedoniadelnorte.com](https://macedoniadelnorte.com/). 

The **digital fingerprint** on the 'actas' cannot be independently verified without the secret keys of the voting machines. So why would we consider the **opposition's 'actas' to be genuine?** There are several reasons that make it a virtual certainty that they are.
- **Thousands of poll workers and witnesses from both the government and the opposition have physical 'actas' they received from their polling station at home**. So consider the counterfactual: Let's imagine the more than 25 thousand 'actas' had been forged completely undetected within a very short space of time in a logistical masterstroke. It'd require a conspiracy of thousands of people (including all government witnesses!) to not turn up a single contradictory acta!
- **The electoral authorities could prove fakes even without physical 'actas' using the digital fingerprint**. They would only have to provide the secret key of a voting machine. If the encryption algorithm is then fed with the data from the scanned 'acta' and this secret key, it would have to generate the same digital fingerprint that is on the scanned 'acta'. Without knowing this secret key, it's impossible to fake this fingerprint ex-ante.
- macedoniadelnorte.com has **amassed [over 300 videos](https://macedoniadelnorte.com/videos) taken before voting centres right after the 'actas' had been printed** and are being shown or read out aloud. So far, **no contradiction** to the uploaded 'actas' has been detected. Again, imagine the 'actas' were forged: That would mean the logistics involved knowing ahead of time where people were going to make videos immediately after printing the results...

## Electoral authority does not publish data

The electoral authority CNE has so far only published aggregated results, which amounts to **nothing more than a claim**. It **has not published any data per voting machine, let alone 'actas'**. According to the electoral law, the maximum time window for this is only a few days and has therefore expired.

The simplest explanation for the behaviour of the electoral authorities is this: They have not found a counter-strategy to the collection of the 'actas'. Because of the digital fingerprints, they know that the 'actas' published by the opposition are genuine, and they cannot forge 'actas' unnoticed because of the fingerprint. (I still need to verify whether this last point is actually technically impossible).
## No rounding error in initial fraudulent results

In short: in the first figures published by the government-owned electoral authority CNE, there are **no rounding errors that should naturally occur**. If you were to actually count the votes and then calculate the percentage, it would be impossible. This is only possible by **first determining the percentage and then inventing the number of votes**. An explanatory video:

![[https://www.youtube.com/watch?v=9nXw9xRSReg]]
## Head of the only independent election observer mission: Everyone knows Edmundo won

The only international election observers invited by the autocracy were the Carter Center. [They published](https://www.cartercenter.org/news/pr/2024/venezuela-073024.html) numerous flaws even in the run-up to the elections (which I reported [in this video](2024%20elections.md)) and concluded that the elections 'did not meet international standards of electoral integrity and **cannot be considered democratic**.' 

> The Carter Center cannot verify or certify the election results announced by the National Electoral Council (CNE), and the electoral authority's failure to announce the results by polling station is a serious violation of electoral principles.
> 
> - [Carter Centre](https://www.cartercenter.org/news/pr/2024/venezuela-073024.html)

Jennie Lincoln, the head of the Carter Centre's mission in Venezuela, confirmed at least **twice that Edmundo won**. 'The government, the ruling party and the opposition **know that Edmundo González won the election** by almost two to one,' she told [NPR](https://www.npr.org/2024/08/06/nx-s1-5064231/the-integrity-of-the-venezuelan-presidential-election-is-under-scrutiny). 

[Agence France-Presse](https://www.voanews.com/a/no-evidence-venezuela-vote-hacked-carter-center-election-monitor-says/7734334.html) also spoke to her and reported: 'The Centre has analysed the same figures from the available data that the opposition used and - together with other organisations and universities - has confirmed González as the winner with more than 60% of the vote.'

## Polls before and after the election show victory for González

[Pre-election polls](https://es.wikipedia.org/wiki/Anexo:Encuestas_y_sondeos_de_intenci%C3%B3n_de_voto_para_las_elecciones_presidenciales_de_Venezuela_de_2024) indicated that González would probably receive twice as many votes as Maduro.

Edison Research published a **post-election poll showing that González received 65 per cent** of the vote, compared to 31 per cent for Maduro. The company conducts high-profile election polls in the United States and other countries. 'The official results are ridiculous,' Edison Executive Vice President Rob Farbman said [in an email to Reuters](https://www.reuters.com/world/americas/government-opposition-both-claim-venezuela-election-win-official-results-2024-07-29/), explaining that they stand by the results of the poll. Edison's poll was conducted nationwide with preliminary data from 6,846 voters interviewed at 100 polling stations.

The Venezuelan company Meganalisis [also published a post-election poll](https://x.com/Meganalisis/status/1817699015359639966) and predicted **65 per cent of the vote for González** and just under 14 per cent for Maduro.

## Hacking is almost certainly not a factor

The electoral authority CNE **claims that it was hacked** and therefore did not publish any results. This is not credible for the following reasons:
- The CNE offered **no evidence to back up the claim**.
- The **electoral network is not connected to the internet** at all. The Carter Centre's deputy chief of mission in Venezuela, Patricio Ballados, [said](https://elestimulo.com/elecciones-2024/2024-08-04/centro-carter-no-hackeo-elecciones-venezuela/#Echobox=1722819448): 'An attack via the Internet would be practically impossible, because there were exclusively special channels for the transmission of CNE data, which were presented by the authority a few days before the election as one of the security precautions and one of the greatest strengths of the system'. 
- There would be a completely analogue way of proving a result: the individual paper ballots in the ballot boxes or the physical 'actas' of the machines.
- There are [technical reasons](https://x.com/phenobarbital/status/1818990019761091059) to suggest that it was the regime itself that shut down the CNE website.
- Venezuelan "Attorney General" Tarek Saab originally claimed the attack originated from North Macedonia. North Macedonia said Venezuelan authorities offered no evidence and didn't seek legal assistance, [as Radio Free Europe reported](https://www.rferl.org/a/north-macedonia-venezuela-protests-maduro-cyberattack/33056611.html). Later Saab shifted the story and said it was a hacker named Astra. A person claiming to be Astra gave [Publimetro an interview](https://www.publimetro.com.mx/noticias/2024/08/14/astra-rompe-el-silencio-del-hackeo-mundial-a-liderar-la-ciberguerra-contra-maduro/) and claimed they did hack the CNE, but didn't interfere with the voting but rather gathered evidence of fraud. (I'm not sure what to make of the interview.)
