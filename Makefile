########################################################################
####################### Makefile Template ##############################
########################################################################
# Student settings
NAME = Joanna Jose
SID = 1002112140
EMAIL = jkj2140@mavs.uta.edu
SEMESTER = SPRING2025
PROJECT=PROJ03
 

####### DO NOT EDIT BELOW THIS LINE!!! #########
author: 
	@echo $(NAME)
	@echo $(SID)
	@echo $(EMAIL)
	@echo $(SEMESTER)

submit:
submit:
	git ls-files | zip -r "submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip" -@
	@echo "Submission zip file created: submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip"