var docData = {"isSingleFile":false,"name":"jsonutils","description":"\u003ch2\u003eModule Overview\u003c/h2\u003e\n\u003cp\u003eThis module provides utility functions to manipulate the built-in \u003ccode\u003ejson\u003c/code\u003e data type. It provides APIs to convert an \u003ccode\u003exml\u003c/code\u003e to a \u003ccode\u003ejson\u003c/code\u003e or convert a \u003ccode\u003etable\u003c/code\u003e to a \u003ccode\u003ejson\u003c/code\u003e.\u003c/p\u003e\n","modules":[{"id":"jsonutils","summary":"\u003cp\u003eThis module provides utility functions to manipulate the built-in \u003ccode\u003ejson\u003c/code\u003e data type. It provides APIs to convert an \u003ccode\u003exml\u003c/code\u003e to a \u003ccode\u003ejson\u003c/code\u003e or convert a \u003ccode\u003etable\u003c/code\u003e to a \u003ccode\u003ejson\u003c/code\u003e.\u003c/p\u003e\n","description":"\u003ch2\u003eModule Overview\u003c/h2\u003e\n\u003cp\u003eThis module provides utility functions to manipulate the built-in \u003ccode\u003ejson\u003c/code\u003e data type. It provides APIs to convert an \u003ccode\u003exml\u003c/code\u003e to a \u003ccode\u003ejson\u003c/code\u003e or convert a \u003ccode\u003etable\u003c/code\u003e to a \u003ccode\u003ejson\u003c/code\u003e.\u003c/p\u003e\n","orgName":"ballerina","version":"1.0.3","records":[{"fields":[{"defaultValue":"\"@\"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"attributePrefix","description":"\u003cp\u003eAttribute prefix used in the XML\u003c/p\u003e\n","isDeprecated":false},{"defaultValue":"true","type":{"name":"boolean","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"preserveNamespaces","description":"\u003cp\u003eInstructs whether to preserve the namespaces of the XML when converting\u003c/p\u003e\n","isDeprecated":false}],"isClosed":false,"name":"XmlOptions","description":"\u003cp\u003eProvides configurations for converting XML to JSON.\u003c/p\u003e\n","isDeprecated":false}],"classes":[],"abstractObjects":[],"clients":[],"listeners":[],"functions":[{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"category":"UNKNOWN","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"x","description":"\u003cp\u003eThe XML source to be converted to JSON\u003c/p\u003e\n","isDeprecated":false},{"defaultValue":"{}","type":{"name":"XmlOptions","category":"reference","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"options","description":"\u003cp\u003eThe \u003ccode\u003eXmlOptions\u003c/code\u003e record consisting of the configurations for the conversion\u003c/p\u003e\n","isDeprecated":false}],"returnParameters":[{"type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"json","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"name":"error","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"\u003cp\u003eThe JSON representation of the given XML on success, else returns an \u003ccode\u003eerror\u003c/code\u003e\u003c/p\u003e\n","isDeprecated":false}],"name":"fromXML","description":"\u003cp\u003eConverts an XML object to its JSON representation.\u003c/p\u003e\n\u003cpre\u003e\u003ccode class\u003d\"language-ballerina\"\u003exml xmlValue \u003d xml `\u0026lt;!-- outer comment --\u0026gt;` + xml `\u0026lt;name\u0026gt;supun\u0026lt;/name\u0026gt;`;\njson|error jsonValue \u003d fromXML(mxlValue);\n\u003c/code\u003e\u003c/pre\u003e\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"category":"UNKNOWN","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"tableValue","description":"\u003cp\u003eThe source table to be converted to JSON\u003c/p\u003e\n","isDeprecated":false}],"returnParameters":[{"type":{"name":"json","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"\u003cp\u003eThe JSON representation of the source table\u003c/p\u003e\n","isDeprecated":false}],"name":"fromTable","description":"\u003cp\u003eConverts a table to its JSON representation.\u003c/p\u003e\n\u003cpre\u003e\u003ccode class\u003d\"language-ballerina\"\u003etype Employee record {\n     int id;\n     string name;\n     float salary;\n     boolean permanent;\n };\ntable\u0026lt;Employee\u0026gt; tableValue \u003d table[ { id: 1, name: \u0026quot;Mary\u0026quot;,  salary: 300.5, permanent: true },\n        { id: 2, name: \u0026quot;John\u0026quot;,  salary: 300.5, permanent: true }\n    ];\njson jsonValue \u003d jsonutils:fromTable(tableValue);\n\u003c/code\u003e\u003c/pre\u003e\n","isDeprecated":false}],"constants":[],"annotations":[],"errors":[],"types":[],"resources":[]}]};