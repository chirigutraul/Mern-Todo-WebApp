studenti = {}
i=1
with open("C:\gdsc\python\program#2\p2txt.txt","r") as fisier:
    for line in fisier:
        if i%2==1:
            nume=line
            nume=nume.strip('\n')
            i=i+1
        else:     
            varsta=line
            varsta=varsta.strip('\n')
            i=i+1
            studenti[nume]=varsta
print(studenti)