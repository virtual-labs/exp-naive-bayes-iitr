### **Introduction**

Bayes' theorem, named after the Reverend Thomas Bayes, is a fundamental concept in probability theory and statistics. It allows us to update our beliefs or probabilities about an event based on new evidence or information. Bayes' theorem mathematically describes how to revise or update our initial beliefs using conditional probabilities.<br>

The theorem states:<br>

<center><b>P(A|B) = (P(A)*P(B|A)) / P(B)</b></center><br>

where,<br>
&nbsp;&nbsp;&nbsp;P(A|B) is the posterior probability of event A given event B has occurred.<br>
&nbsp;&nbsp;&nbsp;P(B|A) is the likelihood of event B given event A has occurred.<br>
&nbsp;&nbsp;&nbsp;P(A) is the prior probability of event A.<br>
&nbsp;&nbsp;&nbsp;P(B) is the prior probability of event B.<br>

To understand the theorem, let's break it down into its components:

* P(A|B): This is the posterior probability, which represents the updated probability of event A occurring given that event B has occurred. It is the probability we are interested in finding.
* P(B|A): This is the likelihood, which represents the probability of event B occurring given that event A has occurred. It quantifies how well event B supports the occurrence of event A.
* P(A): This is the prior probability, which represents the initial or prior belief in the probability of event A occurring before considering any new evidence or information.
* P(B): This is the marginal probability, which represents the probability of event B occurring irrespective of event A. It serves as a normalization factor to ensure that the resulting posterior probability is properly scaled.

By applying Bayes' theorem, we can update our initial beliefs about the probability of event A given the occurrence of event B. We multiply the prior probability by the likelihood and divide it by the marginal probability to obtain the posterior probability.

Bayes' theorem has various applications across different fields, including but not limited to machine learning, data science, medical diagnosis, spam filtering, and natural language processing. It enables us to update our beliefs in a principled way based on new evidence, making it a powerful tool for probabilistic reasoning and decision-making

[For information click here](docs/E6_theory.pdf)

