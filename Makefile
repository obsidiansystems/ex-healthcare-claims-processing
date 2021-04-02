MODELS_DAR=target/healthcare-claims-processing.dar
TRIGGERS_DAR=target/healthcare-claims-processing-triggers.dar

.PHONY: build
build: build-dars ui/daml.js

.PHONY: clean
clean:
	rm -rf model/.daml triggers/.daml
	rm -rf target

ui/daml.js: build-dars
	rm -rf ui/daml.js
	daml codegen js target/healthcare-claims-processing.dar -o ui/daml.js

### DARS ###

.PHONY: build-dars
build-dars: $(MODELS_DAR) $(TRIGGERS_DAR)

DAML_SRC=$(shell find model/daml/ -name '*.daml')

$(MODELS_DAR): $(DAML_SRC) model/daml.yaml
	cd model && daml build --output ../$@

TRIGGERS_DAML_SRC=$(shell find triggers/daml/ -name '*.daml')

$(TRIGGERS_DAR): $(TRIGGERS_DAML_SRC) triggers/daml.yaml $(MODELS_DAR)
	cd triggers && daml build --output ../$@


.PHONY: test-dars
test-dars: build-dars
	daml test --junit target/daml-test-reports/model.xml
	cd triggers && daml test --junit ../target/daml-test-reports/triggers.xml

