BEGIN;

INSERT INTO blogful_articles (title, date_published, content)
VALUES
    ('Iran’s Grim Economy Limits Its Willingness to Confront the U.S.', '2020-01-13 11:00:00', 'Iran is caught in a wretched economic crisis. Jobs are scarce. Prices for food and other necessities are skyrocketing. The economy is rapidly shrinking. Iranians are increasingly disgusted.'),
    ('Warren Says Sanders Told Her a Woman Could Not Win the Presidency', '2020-01-12 09:30:00', 'Earlier on Monday, Bernie Sanders had denied making the remark in a private 2018 meeting with Elizabeth Warren, accusing her campaign staff of “lying about what happened.”'),
    ('Where Trails Are for Skating, Not Hiking', '2020-01-05 11:30:00', 'It’s a skater’s dream: icy forest mazes and long, winding paths through winter landscapes. In Quebec, Canada, the dream is real.'),
    ('The health-care industry is letting surgeons behave like muggers', '2019-05-07 12:30:00', 'Telling a patient to negotiate a bill directly with the provider, as my insurance company suggested, is akin to telling the victim of a mugging to ask the thief for their purse back.'),
    ('Jordi Cruyff es el nuevo seleccionador de Ecuador', '2019-08-07 09:27:00', 'Después de once días en que se conociera que el nuevo técnico de la selección absoluta de Ecuador iba a ser el neerlandés Jordi Cruyff, la noche del lunes se hizo oficial.'),
    ('Los USD 104,5 millones', '2019-05-07 07:27:00', 'En el Correato –año 2011– se estableció que los valores que por IVA paguen los Gobiernos Autónomos Descentralizados y las universidades y escuelas politécnicas públicas '),
    ('Bill to End Religious Exemptions for Vaccinations Collapses in N.J.', '2019-10-11 07:26:00', 'The proposal had been one of the nation’s broadest, but it came under intense criticism from vaccine skeptics.'),
    ('Cory Booker’s Exit From 2020 Race Ends a Once-Promising Political Chapter', now() - '15 days'::INTERVAL, 'The New Jersey senator, who built his campaign around a message of unity, was unable to catch on with substantial numbers of voters and ended his quest before voting began.'),
    ('Oscar Nominations 2020: ‘Joker’ Leads With 11 Nods', now() - '11 days'::INTERVAL, '“The Irishman,” “Once Upon a Time … in Hollywood” and “1917” each received 10 nominations. Black actors and actresses were largely overlooked.'),
    ('2019 Was a Record Year for Ocean Temperatures, Data Show', now() - '201 days'::INTERVAL, 'Last year was the warmest year on record for the world’s oceans, part of a long-term warming trend, according to a study released Monday.')
;
    