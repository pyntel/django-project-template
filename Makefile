test:
	./manage.py test --color mainapp

clean:
	find . -name "*.pyc" | xargs rm
