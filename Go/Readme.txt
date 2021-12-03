If go not available after installing 

Open ~/.profile
	
	$ vim ~/.profile
	or
	$ vim ~/.bashrc

	 and add the following in the end of the file:
	export PATH=$PATH:/usr/local/go/bin

Then:

	$ source ~/.profile
	or
	$ source ~/.bashrc

Check:
	
	$ go version

