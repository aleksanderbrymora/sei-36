# Lawrence's answer

import re
def isIsogram (checkstring):
    notisogram = re.search(r"(.).*\1", checkstring.lower())
    if (notisogram):
        print("Your word is not an isogram!")
    else:
        print("Your word is an isogram!")
    return
isIsogram("Dermatoglyphics")
isIsogram("isogram")
isIsogram("aba")
isIsogram("moOse")
isIsogram("isIsogram")
isIsogram("")

# Mitch's answer

def isIsogram(word):
    print((len(list(set(list((word).lower()))))) == (len((word).lower())))