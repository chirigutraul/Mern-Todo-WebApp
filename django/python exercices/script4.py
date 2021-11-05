with open("fisier.txt","r") as f:
    continut=f.read()
with open("noul_fisier.txt","w") as f:
    f.write(continut)