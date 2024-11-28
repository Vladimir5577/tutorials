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

// ==========================================================
Run with live reload:

    Install air:
        $ go get -u github.com/cosmtrek/air
    Init air into the project:
        $ air init  
        or
        $ ~/go/bin/air init
        It will create the file ".air.toml" then put settings inside the file.

    Run:
        $ ~/GOPATH/bin/air
        or 
        $ ~/go/bin/air

// ==========================================================
Debug with Delve

If deleve not available
$ dlv
then

$ ~/go/bin/dlv 

$ dlv debug  --- open delve
> break main.go:10  --- set breakpoint on line 10
> continue  --- run until breakpoint
> locals    --- print local variable
> restart   --- Restart process


// ==========================================================

Print structure to the console:
	fmt.Printf("Structure: %+v\n", my_structure)

// ==========================================================
Run to see garbage collection:
	$ go run -gcflags -m main.go