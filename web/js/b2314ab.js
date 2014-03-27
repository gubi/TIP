/*=======================================================================================
 *																						*
 *									Tags.inc.php										*
 *																						*
 *======================================================================================*/

/**
 * Default attribute tags.
 *
 * This file contains the tag definitions for all default attributes, these tags are used
 * as the object's attribute keys and are related to the default attribute terms.
 *
 * To convert this file to javascript use the following grep pattern:
 * <code>
 * search:  ^define\( "(.+)",.+(\'.+\').*;
 * replace: var \1 = \2;
 * </code>
 *
 * To convert the definitions into constants:
 * <code>
 * search:  ^\tdefine\( \"(.+)\"\,(.+)(\'.+\') \);\r
 * replace: \tconst \1 =   \2\3;\r
 * </code>
 *
 *	@package	MyWrapper
 *	@subpackage	Definitions
 *
 *	@author		Milko A. Škofič <m.skofic@cgiar.org>
 *	@version	1.00 19/11/2013
 */

/*=======================================================================================
 *	IDENTIFICATION ATTRIBUTES															*
 *======================================================================================*/

/**
 * _id.
 *
 * Native identifier.
 *
 * This attribute contains the native unique identifier of the object. This identifier is
 * used as the default unique key for all objects and can have any scalar data type.
 */
var kTAG_NID = '_id';

/**
 * NAMESPACE.
 *
 * Namespace.
 *
 * This attribute is a reference to a term which represents the namespace of the current
 * object. The object local identifiers must be unique within the scope of the namespace.
 */
var kTAG_NAMESPACE = '1';

/**
 * LID.
 *
 * Local identifier.
 *
 * This attribute contains the local unique identifier. This value represents the value that
 * uniquely identifies an object within a specific domain or namespace. It is by definition
 * a string constituting the suffix of the global identifier, {@link kTAG_GID}.
 */
var kTAG_LID = '2';

/**
 * GID.
 *
 * Global identifier.
 *
 * This attribute contains the global unique identifier. This value represents the value
 * that uniquely identifies the object across domains and namespaces. This value is by
 * definition a string and will generally constitute the object's primary key
 * ({@link kTAG_NID}) in full or hashed form.
 */
var kTAG_GID = '3';

/**
 * UID.
 *
 * Unique identifier.
 *
 * This attribute contains the hashed unique identifier of an object in which its
 * {@link kTAG_NID} is not related to the {@link kTAG_GID}. This is generally used when
 * the {@link kTAG_NID} is a sequence number.
 */
var kTAG_UID = '4';

/**
 * PID.
 *
 * Persistent identifier.
 *
 * This attribute is used when an object needs a persistent identifier and it does not have
 * a global or native identifier which is either unique or persistent. This attribute is
 * set whenever a persistent identifier is needed to identify an object across
 * implementations and this is not possible using other object attributes.
 */
var kTAG_PID = '5';

/**
 * CURRENT.
 *
 * Current identifier.
 *
 * This attribute is used when the current object is obsolete or superseeded, it holds a
 * reference to the object that replaces the current one.
 */
var kTAG_CURRENT = '6';

/**
 * SYNONYMS.
 *
 * Synonyms.
 *
 * This attribute contains a list of strings that represent alternate identifiers for the
 * hosting object. Synonyms do not have any relation to the namespace.
 */
var kTAG_SYNONYMS = '7';

/*=======================================================================================
 *	CLASSIFICATION ATTRIBUTES															*
 *======================================================================================*/

/**
 * DOMAIN.
 *
 * Domain.
 *
 * This attribute is an enumerated set that contains the domain to which the hosting object
 * belongs to.
 */
var kTAG_DOMAIN = '8';

/**
 * AUTHORITY.
 *
 * Authority.
 *
 * This attribute is an enumerated set that contains the authority to which the hosting
 * object belongs to.
 */
var kTAG_AUTHORITY = '9';

/**
 * COLLECTION.
 *
 * Collection.
 *
 * This string attribute represents the collection identifier, it acts as a namespace for
 * identifiers and as a collection for objects.
 */
var kTAG_COLLECTION = '10';

/**
 * CATEGORY.
 *
 * Category.
 *
 * This attribute is an enumerated set that contains all the categories to which the hosting
 * object belongs to.
 */
var kTAG_CATEGORY = '11';

/**
 * KIND.
 *
 * Kind.
 *
 * This attribute is an enumerated set that defines the kind of the hosting object.
 */
var kTAG_KIND = '12';

/**
 * TYPE.
 *
 * Type.
 *
 * This attribute is an enumerated set that contains a combination of data type and
 * cardinality indicators which, combined, represet the data type of the hosting object.
 */
var kTAG_TYPE = '13';

/**
 * INDEX.
 *
 * Index.
 *
 * This attribute is an integer that represets the relative position of the object within
 * its container.
 */
var kTAG_INDEX = '14';

/**
 * RANK.
 *
 * Rank.
 *
 * This attribute defines the rank of the object.
 */
var kTAG_RANK = '15';

/**
 * CLASS.
 *
 * Class.
 *
 * This attribute is a string that represets the referenced object's class. This attribute
 * is used to instantiate the correct class once an object has been retrieved from its
 * container.
 */
var kTAG_CLASS = '16';

/*=======================================================================================
 *	REPRESENTATION ATTRIBUTES															*
 *======================================================================================*/

/**
 * INPUT.
 *
 * Input.
 *
 * This attribute represents the enumerated set for the suggested or preferred input type
 * that should be used in a form to manage the value of the referenced property.
 */
var kTAG_INPUT = '17';

/**
 * PATTERN.
 *
 * Pattern.
 *
 * This attribute represents the regular expression pattern that can be used to validate the
 * value of the referenced property.
 */
var kTAG_PATTERN = '18';

/**
 * LENGTH.
 *
 * Length.
 *
 * This attribute represents the maximum number of characters that may comprise the value of
 * the referenced property.
 */
var kTAG_LENGTH = '19';

/**
 * MIN.
 *
 * Minimum value.
 *
 * This attribute represents the minimum value that the referenced property may hold.
 */
var kTAG_MIN_VAL = '20';

/**
 * MAX.
 *
 * Maximum value.
 *
 * This attribute represents the maximum value that the referenced property may hold.
 */
var kTAG_MAX_VAL = '21';

/*=======================================================================================
 *	DESCRIPTION ATTRIBUTES																*
 *======================================================================================*/

/**
 * NAME.
 *
 * Name.
 *
 * This attribute represents the name of the referenced object.
 * It is a {@link kTYPE_STRING} scalar which does not have a language component.
 */
var kTAG_NAME = '22';

/**
 * LABEL.
 *
 * Label.
 *
 * This attribute represents the label, name or short description of the referenced object.
 * It is a {@link kTYPE_LSTRING} structure in which the label can be expressed in several
 * languages.
 */
var kTAG_LABEL = '23';

/**
 * DEFINITION.
 *
 * Definition.
 *
 * This attribute represents the definition of the referenced object. It is an
 * {@link kTYPE_LSTRING} structure in which the definition can be expressed in several
 + languages. A definition is independent of the context.
 */
var kTAG_DEFINITION = '24';

/**
 * DESCRIPTION.
 *
 * Description.
 *
 * This attribute represents the description of the referenced object. It is an
 * {@link kTYPE_LSTRING} structure in which the description can be expressed in several
 * languages. A description depends on the context.
 */
var kTAG_DESCRIPTION = '25';

/**
 * NOTES.
 *
 * Notes.
 *
 * This attribute represents the notes or comments of the referenced object.
 * It is a {@link kTYPE_LSTRING} structure in which the description can be expressed in
 * several languages.
 */
var kTAG_NOTES = '26';

/**
 * EXAMPLES.
 *
 * Examples.
 *
 * This attribute represents the examples or templates of the referenced object.
 * It is a list of strings where each string represents an example or template.
 */
var kTAG_EXAMPLES = '27';

/*=======================================================================================
 *	AUTHORSHIP ATTRIBUTES																*
 *======================================================================================*/

/**
 * AUTHORS.
 *
 * Authors.
 *
 * This attribute represents a list of authors, it is an array of author names.
 */
var kTAG_AUTHORS = '28';

/**
 * ACKNOWLEDGMENTS.
 *
 * Acknowledgments.
 *
 * This attribute represents a list of generic acknowledgments, it is an array of strings.
 */
var kTAG_ACKNOWLEDGMENTS = '29';

/**
 * BIBLIOGRAPHY.
 *
 * Bibliography.
 *
 * This attribute represents a list of bibliographic references, it is an array of strings.
 */
var kTAG_BIBLIOGRAPHY = '30';

/**
 * VERSION.
 *
 * Version.
 *
 * This attribute represents the object's version.
 */
var kTAG_VERSION = '31';

/*=======================================================================================
 *	REFERENCE ATTRIBUTES																*
 *======================================================================================*/

/**
 * UNIT.
 *
 * Unit.
 *
 * This attribute contains a reference to a unit object.
 */
var kTAG_UNIT = '32';

/**
 * ENTITY.
 *
 * Entity.
 *
 * This attribute contains a reference to an entity object.
 */
var kTAG_ENTITY = '33';

/**
 * TERM.
 *
 * Term.
 *
 * This attribute contains a reference to an object that represents the term of the
 * attribute host.
 */
var kTAG_TERM = '34';

/**
 * NODE.
 *
 * Node.
 *
 * This attribute contains a reference to an object that represents the master node of the
 * attribute host.
 */
var kTAG_NODE = '35';

/**
 * TAG.
 *
 * Tag.
 *
 * This attribute contains a reference to an object that represents a tag.
 */
var kTAG_TAG = '36';

/**
 * SUBJECT.
 *
 * Subject.
 *
 * This attribute contains a reference to an object that represents the start, origin or
 * subject vertex of a <tt>subject</tt>/<tt>predicate</tt>/<tt>object</tt> relationship.
 */
var kTAG_SUBJECT = '37';

/**
 * kTAG_OBJECT.
 *
 * Object.
 *
 * This attribute contains a reference to an object that represents the end, destination or
 * object vertex of a <tt>subject</tt>/<tt>predicate</tt>/<tt>object</tt> relationship.
 */
var kTAG_OBJECT = '38';

/**
 * PREDICATE.
 *
 * Predicate.
 *
 * This attribute contains a reference to an object that represents the predicate term of a
 * <tt>subject</tt>/<tt>predicate</tt>/<tt>object</tt> relationship.
 */
var kTAG_PREDICATE = '39';

/**
 * PATH.
 *
 * Path.
 *
 * This attribute represents a sequence of <tt>vertex</tt>, <tt>predicate</tt>,
 * <tt>vertex</tt> elements whose concatenation represents a path between an origin vertex
 * and a destination vertex.
 */
var kTAG_PATH = '40';

/*=======================================================================================
 *	COLLECTION ATTRIBUTES																*
 *======================================================================================*/

/**
 * NAMESPACE-REFS.
 *
 * Namespace references count.
 *
 * This integer attribute counts how many times external objects have referenced the current
 * one as a namespace.
 */
var kTAG_NAMESPACE_REFS = '41';

/**
 * DATAPOINT-REFS.
 *
 * Data point references count.
 *
 * This integer attribute counts how many times the current tag was used to annotate data.
 */
var kTAG_DATAPOINT_REFS = '42';

/**
 * NODES.
 *
 * Nodes.
 *
 * This attribute is a collection of node references, it is an array of node object native
 * identifiers who reference the current object.
 */
var kTAG_NODES = '43';

/**
 * EDGES.
 *
 * Edges.
 *
 * This attribute is a collection of edge references, it is an array of edge object native
 * identifiers who reference the current object.
 */
var kTAG_EDGES = '44';

/**
 * TAGS.
 *
 * Tags.
 *
 * This attribute is a collection of tag references, it is an array of tag object native
 * identifiers referenced by the current object.
 */
var kTAG_TAGS = '45';

/**
 * OFFSETS.
 *
 * Offsets.
 *
 * This attribute is a collection of offsets, that is, an array of strings representing a
 * set of offsets.
 */
var kTAG_OFFSETS = '46';

/**
 * FEATURES.
 *
 * Features.
 *
 * This attribute is a collection of feature references, it is an array of object native
 * identifiers that reference the current object as a feature or trait.
 */
var kTAG_FEATURES = '47';

/**
 * METHODS.
 *
 * Methods.
 *
 * This attribute is a collection of method references, it is an array of object native
 * identifiers that reference the current object as a method or modifier.
 */
var kTAG_METHODS = '48';

/**
 * SCALES.
 *
 * Scales.
 *
 * This attribute is a collection of scale references, it is an array of object native
 * identifiers that reference the current object as a scale or unit.
 */
var kTAG_SCALES = '49';

/**
 * MERGED.
 *
 * Merged.
 *
 * This attribute is a collection of tag references, it is used by tags common to several
 * object domains, the value of the tags in this list is automatically set into the current
 * tag.
 */
var kTAG_MERGED = '50';

/*=======================================================================================
 *	OBJECT CATEGORIES																	*
 *======================================================================================*/

/**
 * INVENTORY.
 *
 * Inventory attributes.
 */
var kTAG_INVENTORY = '51';

/**
 * STATUS.
 *
 * Status attributes.
 */
var kTAG_STATUS = '52';

/**
 * EVENT.
 *
 * Event.
 */
var kTAG_EVENT = '53';

/**
 * OCCURRENCE.
 *
 * Occurrence.
 */
var kTAG_OCCURRENCE = '54';

/**
 * TAXON.
 *
 * Taxon attributes.
 */
var kTAG_TAXON = '55';

/**
 * CROSSABILITY.
 *
 * Crossability.
 */
var kTAG_CROSS = '56';

/**
 * LOCATION.
 *
 * Location attributes.
 */
var kTAG_LOCATION = '57';

/**
 * ENVIRONMENT.
 *
 * Environment attributes.
 */
var kTAG_ENVIRONMENT = '58';

/**
 * BIOCLIMATIC.
 *
 * Bio-climatic attributes.
 */
var kTAG_BIOCLIMATIC = '59';

/**
 * TEMPERATURE.
 *
 * Monthly temperature attributes.
 */
var kTAG_TEMPERATURE = '60';

/**
 * PRECIPITATION.
 *
 * Monthly precipitation attributes.
 */
var kTAG_PRECIPITATION = '61';

/*=======================================================================================
 *	INVENTORY ATTRIBUTES																*
 *======================================================================================*/

/**
 * NICODE.
 *
 * National inventory.
 */
var kTAG_NICODE = '62';

/**
 * FAO:INSTCODE.
 *
 * Responsible institution.
 */
var kTAG_INSTCODE = '63';

/*=======================================================================================
 *	STATUS ATTRIBUTES																	*
 *======================================================================================*/

/**
 * AVAILABLE.
 *
 * Available.
 */
var kTAG_AVAILABLE = '64';

/**
 * RESTRICTIONS.
 *
 * Restrictions.
 */
var kTAG_RESTRICTIONS = '65';

/*=======================================================================================
 *	TAXON ATTRIBUTES																	*
 *======================================================================================*/

/**
 * TAXON-NAME.
 *
 * Taxon name.
 */
var kTAG_TAXON_NAME = '66';

/**
 * TAXON-GENERA.
 *
 * Taxon genera.
 */
var kTAG_TAXON_GENERA = '67';

/**
 * TAXON-RANK.
 *
 * Taxon rank.
 */
var kTAG_TAXON_RANK = '68';

/**
 * CROP.
 *
 * Taxon crop.
 */
var kTAG_CROP = '69';

/**
 * ANNEX1.
 *
 * Taxon name.
 */
var kTAG_ANNEX1 = '70';

/*=======================================================================================
 *	CROSSABILITY ATTRIBUTES																*
 *======================================================================================*/

/**
 * LISTSPCROSS.
 *
 * List of species crosses.
 */
var kTAG_LISTSPCROSS = '71';

/**
 * LISTSPCROSSREF.
 *
 * List of species crosses references.
 */
var kTAG_LISTSPCROSSREF = '72';

/**
 * METHCROSSREF.
 *
 * Method used for crosses.
 */
var kTAG_METHCROSSREF = '73';

/**
 * SUCCROSSREF.
 *
 * Success rate of crosses.
 */
var kTAG_SUCCROSSREF = '74';

/*=======================================================================================
 *	LOCATION ATTRIBUTES																	*
 *======================================================================================*/

/**
 * COORDINATES.
 *
 * Location coordinates.
 */
var kTAG_COORDINATES = '75';

/**
 * LATITUDE-DISPLAY.
 *
 * Location display latitude.
 *
 * This attribute represents the display latitude, that is, the latitude that should be
 * displayed on a map. This is useful in cases where there are coordinates restrictions:
 * when displaying a point on a map, this coordinate will be used in place of the true
 * coordinate.
 */
var kTAG_LATITUDE_DISPLAY = '76';

/**
 * LONGITUDE-DISPLAY.
 *
 * Location display longitude.
 *
 * This attribute represents the display longitude, that is, the longitude that should be
 * displayed on a map. This is useful in cases where there are coordinates restrictions:
 * when displaying a point on a map, this coordinate will be used in place of the true
 * coordinate.
 */
var kTAG_LONGITUDE_DISPLAY = '77';

/*=======================================================================================
 *	ENVIRONMENT ATTRIBUTES																*
 *======================================================================================*/

/**
 * GENS.
 *
 * Global Environment Stratification.
 */
var kTAG_GENS = '78';

/**
 * GENS-CLIM.
 *
 * Climatic Zone.
 */
var kTAG_GENS_CLIM = '79';

/**
 * GENS-ENV.
 *
 * Environmental Zone.
 */
var kTAG_GENS_ENV = '80';

/**
 * GHF.
 *
 * Global Human Footprint .
 */
var kTAG_GHF = '81';

/**
 * GLOBCOV.
 *
 * Global Cover.
 */
var kTAG_GLOBCOV = '82';

/**
 * HWSD.
 *
 * Harmonized World Soil.
 */
var kTAG_HWSD = '83';

/**
 * CLIM-TILES.
 *
 * Climate data tiles count.
 *
 * This attribute records the number of tiles (30 seconds) used to generate the climatic
 * data.
 */
var kTAG_CLIM_TILES = '84';

/**
 * CLIM-ELEV-MIN.
 *
 * Minimum environment elevation.
 *
 * This attribute records the minimum elevation of the climatic area, that is, the minimum
 * elevation found when retrieving climatic data.
 */
var kTAG_CLIM_ELEV_MIN = '85';

/**
 * CLIM-ELEV-MEAN.
 *
 * Mean environment elevation.
 *
 * This attribute records the mean elevation of the climatic area, that is, the mean
 * elevation found when retrieving climatic data.
 */
var kTAG_CLIM_ELEV_MEAN = '86';

/**
 * CLIM-ELEV-MAX.
 *
 * Maximum environment elevation.
 *
 * This attribute records the maximum elevation of the climatic area, that is, the maximum
 * elevation found when retrieving climatic data.
 */
var kTAG_CLIM_ELEV_MAX = '87';

/**
 * CLIM-DIST-MIN.
 *
 * Minimum environment distance.
 *
 * This attribute records the minimum distance of the climatic area from the provided
 * geometry.
 */
var kTAG_CLIM_DIST_MIN = '88';

/**
 * CLIM-DIST-MEAN.
 *
 * Mean environment distance.
 *
 * This attribute records the mean distance of the climatic area from the provided
 * geometry.
 */
var kTAG_CLIM_DIST_MEAN = '89';

/**
 * CLIM-DIST-MAX.
 *
 * Maximum environment distance.
 *
 * This attribute records the maximum distance of the climatic area from the provided
 * geometry.
 */
var kTAG_CLIM_DIST_MAX = '90';

/*=======================================================================================
 *	BIO-CLIMATIC ATTRIBUTES																*
 *======================================================================================*/

/**
 * BIO1.
 *
 * Annual Mean Temperature.
 */
var kTAG_BIO1 = '91';

/**
 * BIO2.
 *
 * Mean Diurnal Range.
 */
var kTAG_BIO2 = '92';

/**
 * BIO3.
 *
 * Isothermality.
 */
var kTAG_BIO3 = '93';

/**
 * BIO4.
 *
 * Temperature Seasonality.
 */
var kTAG_BIO4 = '94';

/**
 * BIO5.
 *
 * Maximum Temperature of Warmest Month.
 */
var kTAG_BIO5 = '95';

/**
 * BIO6.
 *
 * Minimum Temperature of Coldest Month.
 */
var kTAG_BIO6 = '96';

/**
 * BIO7.
 *
 * Temperature Annual Range.
 */
var kTAG_BIO7 = '97';

/**
 * BIO8.
 *
 * Mean Temperature of Wettest Quarter.
 */
var kTAG_BIO8 = '98';

/**
 * BIO9.
 *
 * Mean Temperature of Driest Quarter.
 */
var kTAG_BIO9 = '99';

/**
 * BIO10.
 *
 * Mean Temperature of Warmest Quarter.
 */
var kTAG_BIO10 = '100';

/**
 * BIO11.
 *
 * Mean Temperature of Coldest Quarter.
 */
var kTAG_BIO11 = '101';

/**
 * BIO12.
 *
 * Annual Precipitation.
 */
var kTAG_BIO12 = '102';

/**
 * BIO13.
 *
 * Precipitation of Wettest Month.
 */
var kTAG_BIO13 = '103';

/**
 * BIO14.
 *
 * Precipitation of Driest Month.
 */
var kTAG_BIO14 = '104';

/**
 * BIO15.
 *
 * Precipitation Seasonality.
 */
var kTAG_BIO15 = '105';

/**
 * BIO16.
 *
 * Precipitation of Wettest Quarter.
 */
var kTAG_BIO16 = '106';

/**
 * BIO17.
 *
 * Precipitation of Driest Quarter.
 */
var kTAG_BIO17 = '107';

/**
 * BIO18.
 *
 * Precipitation of Warmest Quarter.
 */
var kTAG_BIO18 = '108';

/**
 * BIO19.
 *
 * Precipitation of Coldest Quarter.
 */
var kTAG_BIO19 = '109';

/*=======================================================================================
 *	MONTHLY TEMPERATURE ATTRIBUTES														*
 *======================================================================================*/

/**
 * TEMP1.
 *
 * January mean temperature.
 */
var kTAG_TEMP1 = '110';

/**
 * TEMP1-MIN.
 *
 * January minimum temperature.
 */
var kTAG_TEMP1_MIN = '111';

/**
 * TEMP1-MAX.
 *
 * January maximum temperature.
 */
var kTAG_TEMP1_MAX = '112';

/**
 * TEMP2.
 *
 * February mean temperature.
 */
var kTAG_TEMP2 = '113';

/**
 * TEMP2-MIN.
 *
 * February minimum temperature.
 */
var kTAG_TEMP2_MIN = '114';

/**
 * TEMP2-MAX.
 *
 * February maximum temperature.
 */
var kTAG_TEMP2_MAX = '115';

/**
 * TEMP3.
 *
 * March mean temperature.
 */
var kTAG_TEMP3 = '116';

/**
 * TEMP3-MIN.
 *
 * March minimum temperature.
 */
var kTAG_TEMP3_MIN = '117';

/**
 * TEMP3-MAX.
 *
 * March maximum temperature.
 */
var kTAG_TEMP3_MAX = '118';

/**
 * TEMP4.
 *
 * April mean temperature.
 */
var kTAG_TEMP4 = '119';

/**
 * TEMP4-MIN.
 *
 * April minimum temperature.
 */
var kTAG_TEMP4_MIN = '120';

/**
 * TEMP4-MAX.
 *
 * April maximum temperature.
 */
var kTAG_TEMP4_MAX = '121';

/**
 * TEMP5.
 *
 * May mean temperature.
 */
var kTAG_TEMP5 = '122';

/**
 * TEMP5-MIN.
 *
 * May minimum temperature.
 */
var kTAG_TEMP5_MIN = '123';

/**
 * TEMP5-MAX.
 *
 * May maximum temperature.
 */
var kTAG_TEMP5_MAX = '124';

/**
 * TEMP6.
 *
 * June mean temperature.
 */
var kTAG_TEMP6 = '125';

/**
 * TEMP6-MIN.
 *
 * June minimum temperature.
 */
var kTAG_TEMP6_MIN = '126';

/**
 * TEMP6-MAX.
 *
 * June maximum temperature.
 */
var kTAG_TEMP6_MAX = '127';

/**
 * TEMP7.
 *
 * July mean temperature.
 */
var kTAG_TEMP7 = '128';

/**
 * TEMP7-MIN.
 *
 * July minimum temperature.
 */
var kTAG_TEMP7_MIN = '129';

/**
 * TEMP7-MAX.
 *
 * July maximum temperature.
 */
var kTAG_TEMP7_MAX = '130';

/**
 * TEMP8.
 *
 * August mean temperature.
 */
var kTAG_TEMP8 = '131';

/**
 * TEMP8-MIN.
 *
 * August minimum temperature.
 */
var kTAG_TEMP8_MIN = '132';

/**
 * TEMP8-MAX.
 *
 * August maximum temperature.
 */
var kTAG_TEMP8_MAX = '133';

/**
 * TEMP9.
 *
 * September mean temperature.
 */
var kTAG_TEMP9 = '134';

/**
 * TEMP9-MIN.
 *
 * September minimum temperature.
 */
var kTAG_TEMP9_MIN = '135';

/**
 * TEMP9-MAX.
 *
 * September maximum temperature.
 */
var kTAG_TEMP9_MAX = '136';

/**
 * TEMP10.
 *
 * October mean temperature.
 */
var kTAG_TEMP10 = '137';

/**
 * TEMP10-MIN.
 *
 * October minimum temperature.
 */
var kTAG_TEMP10_MIN = '138';

/**
 * TEMP10-MAX.
 *
 * October maximum temperature.
 */
var kTAG_TEMP10_MAX = '139';

/**
 * TEMP11.
 *
 * November mean temperature.
 */
var kTAG_TEMP11 = '140';

/**
 * TEMP11-MIN.
 *
 * November minimum temperature.
 */
var kTAG_TEMP11_MIN = '141';

/**
 * TEMP11-MAX.
 *
 * November maximum temperature.
 */
var kTAG_TEMP11_MAX = '142';

/**
 * TEMP12.
 *
 * December mean temperature.
 */
var kTAG_TEMP12 = '143';

/**
 * TEMP12-MIN.
 *
 * December minimum temperature.
 */
var kTAG_TEMP12_MIN = '144';

/**
 * TEMP12-MAX.
 *
 * December maximum temperature.
 */
var kTAG_TEMP12_MAX = '145';

/*=======================================================================================
 *	MONTHLY PRECIPITATION ATTRIBUTES													*
 *======================================================================================*/

/**
 * PREC1.
 *
 * January mean precipitation (mm.).
 */
var kTAG_PREC1 = '146';

/**
 * PREC1-MIN.
 *
 * January minimum precipitation (mm.).
 */
var kTAG_PREC1_MIN = '147';

/**
 * PREC1-MAX.
 *
 * January maximum precipitation (mm.).
 */
var kTAG_PREC1_MAX = '148';

/**
 * PREC2.
 *
 * February mean precipitation (mm.).
 */
var kTAG_PREC2 = '149';

/**
 * PREC2-MIN.
 *
 * February minimum precipitation (mm.).
 */
var kTAG_PREC2_MIN = '150';

/**
 * PREC2-MAX.
 *
 * February maximum precipitation (mm.).
 */
var kTAG_PREC2_MAX = '151';

/**
 * PREC3.
 *
 * March mean precipitation (mm.).
 */
var kTAG_PREC3 = '152';

/**
 * PREC3-MIN.
 *
 * March minimum precipitation (mm.).
 */
var kTAG_PREC3_MIN = '153';

/**
 * PREC3-MAX.
 *
 * March maximum precipitation (mm.).
 */
var kTAG_PREC3_MAX = '154';

/**
 * PREC4.
 *
 * April mean precipitation (mm.).
 */
var kTAG_PREC4 = '155';

/**
 * PREC4-MIN.
 *
 * April minimum precipitation (mm.).
 */
var kTAG_PREC4_MIN = '156';

/**
 * PREC4-MAX.
 *
 * April maximum precipitation (mm.).
 */
var kTAG_PREC4_MAX = '157';

/**
 * PREC5.
 *
 * May mean precipitation (mm.).
 */
var kTAG_PREC5 = '158';

/**
 * PREC5-MIN.
 *
 * May minimum precipitation (mm.).
 */
var kTAG_PREC5_MIN = '159';

/**
 * PREC5-MAX.
 *
 * May maximum precipitation (mm.).
 */
var kTAG_PREC5_MAX = '160';

/**
 * PREC6.
 *
 * June mean precipitation (mm.).
 */
var kTAG_PREC6 = '161';

/**
 * PREC6-MIN.
 *
 * June minimum precipitation (mm.).
 */
var kTAG_PREC6_MIN = '162';

/**
 * PREC6-MAX.
 *
 * June maximum precipitation (mm.).
 */
var kTAG_PREC6_MAX = '163';

/**
 * PREC7.
 *
 * July mean precipitation (mm.).
 */
var kTAG_PREC7 = '164';

/**
 * PREC7-MIN.
 *
 * July minimum precipitation (mm.).
 */
var kTAG_PREC7_MIN = '165';

/**
 * PREC7-MAX.
 *
 * July maximum precipitation (mm.).
 */
var kTAG_PREC7_MAX = '166';

/**
 * PREC8.
 *
 * August mean precipitation (mm.).
 */
var kTAG_PREC8 = '167';

/**
 * PREC8-MIN.
 *
 * August minimum precipitation (mm.).
 */
var kTAG_PREC8_MIN = '168';

/**
 * PREC8-MAX.
 *
 * August maximum precipitation (mm.).
 */
var kTAG_PREC8_MAX = '169';

/**
 * PREC9.
 *
 * September mean precipitation (mm.).
 */
var kTAG_PREC9 = '170';

/**
 * PREC9-MIN.
 *
 * September minimum precipitation (mm.).
 */
var kTAG_PREC9_MIN = '171';

/**
 * PREC9-MAX.
 *
 * September maximum precipitation (mm.).
 */
var kTAG_PREC9_MAX = '172';

/**
 * PREC10.
 *
 * October mean precipitation (mm.).
 */
var kTAG_PREC10 = '173';

/**
 * PREC10-MIN.
 *
 * October minimum precipitation (mm.).
 */
var kTAG_PREC10_MIN = '174';

/**
 * PREC10-MAX.
 *
 * October maximum precipitation (mm.).
 */
var kTAG_PREC10_MAX = '175';

/**
 * PREC11.
 *
 * November mean precipitation (mm.).
 */
var kTAG_PREC11 = '176';

/**
 * PREC11-MIN.
 *
 * November minimum precipitation (mm.).
 */
var kTAG_PREC11_MIN = '177';

/**
 * PREC11-MAX.
 *
 * November maximum precipitation (mm.).
 */
var kTAG_PREC11_MAX = '178';

/**
 * PREC12.
 *
 * December mean precipitation (mm.).
 */
var kTAG_PREC12 = '179';

/**
 * PREC12-MIN.
 *
 * December minimum precipitation (mm.).
 */
var kTAG_PREC12_MIN = '180';

/**
 * PREC12-MAX.
 *
 * December maximum precipitation (mm.).
 */
var kTAG_PREC12_MAX = '181';

/*=======================================================================================
 *	ENTITY OBJECT ATTRIBUTES															*
 *======================================================================================*/

/**
 * FIRST-NAME.
 *
 * Entity first name.
 *
 * The entity first name, in case of an individual.
 */
var kTAG_FIRST_NAME = '182';

/**
 * LAST-NAME.
 *
 * Entity last name.
 *
 * The entity surname, in case of an individual.
 */
var kTAG_LAST_NAME = '183';

/**
 * MAIL.
 *
 * Entity mail.
 *
 * The mailing address of an entity.
 */
var kTAG_MAIL = '184';

/**
 * EMAIL.
 *
 * Entity e-mail.
 *
 * The e-mail address of an entity.
 */
var kTAG_EMAIL = '185';

/**
 * PHONE.
 *
 * Entity phone.
 *
 * The telephone number of an entity.
 */
var kTAG_PHONE = '186';

/**
 * FAX.
 *
 * Entity fax.
 *
 * The telefax number of an entity.
 */
var kTAG_FAX = '187';

/**
 * WEB-SITE.
 *
 * Entity web site.
 *
 * The entity internet web site address.
 */
var kTAG_WEB_SITE = '188';

/**
 * AFFILIATION.
 *
 * Entity affiliation.
 *
 * The reference to the entity with which the current entity is affiliated.
 */
var kTAG_AFFILIATION = '189';

/**
 * NATIONALITY.
 *
 * Nationality.
 *
 * The country of an entity.
 */
var kTAG_NATIONALITY = '190';

/**
 * ENTITY-KIND.
 *
 * Entity kind.
 *
 * The entity kind.
 */
var kTAG_ENTITY_KIND = '191';

/**
 * ENTITY-TYPE.
 *
 * Entity type.
 *
 * The entity type.
 */
var kTAG_ENTITY_TYPE = '192';

/*=======================================================================================
 *	USER OBJECT ATTRIBUTES																*
 *======================================================================================*/

/**
 * USER-CODE.
 *
 * User code.
 *
 * The code by which a user is known to the system, it may be equal to the entity
 * identifier.
 */
var kTAG_USER_CODE = '193';

/**
 * USER-PASS.
 *
 * User password.
 *
 * The password by which a user is known to the system.
 */
var kTAG_USER_PASS = '194';

/**
 * USER-ROLE.
 *
 * User roles.
 *
 * The roles assigned to the user.
 */
var kTAG_USER_ROLE = '195';

/**
 * USER-PROFILE.
 *
 * User profile.
 *
 * The profile role name assigned to the user.
 */
var kTAG_USER_PROFILE = '196';

/**
 * USER-DOMAIN.
 *
 * User domain.
 *
 * List of domains the user has access to.
 */
var kTAG_USER_DOMAIN = '197';

/**
 * USER-SOCIAL-NETWORK.
 *
 * User social network.
 */
var kTAG_USER_SOCIAL_NETWORK = '198';

/*=======================================================================================
 *	CUSTOM TYPE SUB ATTRIBUTES															*
 *======================================================================================*/

/**
 * type.
 *
 * Custom data object type.
 *
 * This tag is used as the default offset for indicating a custom data type, in general it
 * is used in a structure in conjunction with the {@link kTAG_CUSTOM_DATA} offset to
 * indicate the data type of the item.
 *
 * Version 1: (kTAG_CUSTOM_TYPE)[type]
 */
var kTAG_CUSTOM_TYPE = 'type';

/**
 * data.
 *
 * Custom data object data.
 *
 * This tag is used as the default offset for indicating a custom data type content, in
 * general this tag is used in conjunction with the {@link kTAG_CUSTOM_TYPE} to wrap a
 * custom data type in a standard structure.
 *
 * Version 1: (kTAG_CUSTOM_DATA)[data]
 */
var kTAG_CUSTOM_DATA = 'data';

/**
 * coordinates.
 *
 * Custom data object coordinates.
 *
 * This tag is used as the default offset for indicating the coordinate values of a shape.
 *
 * Version 1: (kTAG_CUSTOM_COORDINATES)[coordinates]
 */
var kTAG_CUSTOM_COORDINATES = 'coordinates';

/*=======================================================================================
 *	CUSTOM TIMESTAMP SUB-ATTRIBUTES														*
 *======================================================================================*/

/**
 * sec.
 *
 * Seconds.
 *
 * This tag defines the number of seconds since January 1st, 1970.
 *
 * Version 1: (kTYPE_STAMP_SEC)[sec]
 */
var kTAG_STAMP_SEC = 'sec';

/**
 * usec.
 *
 * Microseconds.
 *
 * This tag defines microseconds.
 *
 * Version 1: (kTYPE_STAMP_USEC)[usec]
 */
var kTAG_STAMP_USEC = 'usec';

/*=======================================================================================
 *	CUSTOM TYPED LIST SUB-ATTRIBUTES													*
 *======================================================================================*/

/**
 * t.
 *
 * Type.
 *
 * This tag defines the typed list element type offset.
 *
 * Version 1: (kTAG_TYPED_TYPE)[tp]
 */
var kTAG_TYPED_TYPE = 'tp';

/**
 * d.
 *
 * Data.
 *
 * This tag defines the typed list element data offset.
 *
 * Version 1: (kTAG_TYPED_DATA)[dt]
 */
var kTAG_TYPED_DATA = 'dt';

/*=======================================================================================
 *	CUSTOM RANGE SUB-ATTRIBUTES															*
 *======================================================================================*/

/**
 * l.
 *
 * Minimum.
 *
 * This tag defines the minimum value offset.
 *
 * Version 1: (kTAG_RANGE_MIN)[l]
 */
var kTAG_RANGE_MIN = 'l';

/**
 * m.
 *
 * Mean.
 *
 * This tag defines the mean value offset.
 *
 * Version 1: (kTAG_RANGE_MEAN)[m]
 */
var kTAG_RANGE_MEAN = 'm';

/**
 * h.
 *
 * Maximum.
 *
 * This tag defines the maximum value offset.
 *
 * Version 1: (kTAG_RANGE_MAX)[h]
 */
var kTAG_RANGE_MAX = 'h';

/**
 *	Global plugin setup file.
 *
 *	This file set the global var for the plugin
 *	You can customize the slider changing the html class name of the single elment
 *
 *	@package	ontology slider
 *
 *	@author		Antonino Luca Carella <antonio.carella@gmail.com>
 *	@version	1.00
 */

var slider_destination_content= 'slider';
var slider_destination_root= 'entry_point ul';
var slider_destination_right= 'node_childrens';
var slider_destination_left= 'node_parents';
var slider_destination_center= 'node_details #node_details_container_body';
var slider_destination_center_header= 'node_details #node_details_container_header';
var slider_destination_pager= 'pager';
var slider_destination_breadcrumb= 'breadcrumb';
var slider_destination_breadcrumb_history= 'breadcrumb_history';
var slider_destination_breadcrumb_history_container= 'history_container';
var slider_destination_breadcrumb_history_container_button= 'history_button';
var slider_destination_breadcrumb_ul= 'root';
var slider_destination_search_point= 'search_point';
var slider_destination_search_node_point= 'node_found';
var slider_destination_search_node_list_point= 'node_found_list';
var slider_destination_search_node_pager_point='node_found_pager';

var slider_right_layout_id= 'node_button_right';
var slider_left_layout_id= 'node_button_left';
var slider_center_layout_id= 'node_details_layout';
var slider_pager_layout_id= 'node_pager_layout';
var slider_search_node_list_layout_id= 'slider_node_search_list';
var slider_pager_node_list_layout_id= 'slider_node_pager_list';

var show_pager=false;
var slider_partials_layout;
var slider_menu_layout;
var slider_container_layout;
var slider_breadcrumb_layout;
var slider_css;
var slider_breadcrumb_history_layout;

var top_menu_layout_id= 'nav_top_button';
var bottom_menu_layout_left_id= 'nav_bottom_button_left .node_record';
var bottom_menu_layout_right_id= 'nav_bottom_button_right .node_record';

var urlForRootNodes= '/get-root-nodes';
var urlForNodeDetails= '/get-node-details';
var urlForNodeRelationIN= '/get-node-relation-in';
var urlForNodeRelationOUT= '/get-node-relation-out';
var urlForSearchNodeRelationIN= '/search-node-relation-in';
var urlForSearchNodeRelationOUT= '/search-node-relation-out';
var urlForNodeRelationPagerIN= '/get-node-relation-pager-in';
var urlForNodeRelationPagerOUT= '/get-node-relation-pager-out';
var urlForNodeRelations= '/get-node-relations';

$('document').ready(function(){
  //createCss();
  //createMenu();
  //createContainer();
  //createPartial();
  //createBreadcrumb();
  //createBreadcrumbHistory();
  loadTemplates();
  startHistoryBind();
});

/**
 * this method include on the slider container all html partial
 *
 */
function loadTemplates(){
  //$('#slider_content').append(slider_css);
  //$('#slider_content').append(slider_menu_layout);
  //$('#slider_content').append(slider_breadcrumb_layout);
  //$('#slider_content').append(slider_breadcrumb_history_layout);
  //$('#slider_content').append(slider_container_layout);
  //$('#slider_content').append(slider_partials_layout);
  initSlider();
}

function initSlider()
{
  //console.log('initSlider');
  getRootNodeList();
  createSearchPoint(); //defined in search.js
  hideSlider();
}


//--------ASYNC REQUEST


/**
 * this method make the server request and manage the response
 * @param string url
 * @param string callback
 *
 * @returns Array data
 */
function ask(url, callback){
  jQuery.ajax({
      url:url
  }).done(function(data) {
    if(data === null){
      console.log('error, the request is null');
      return false;
    }
    else{
      setBasicValue(url, data);
      if(callback){
        callback();
      }
      else{
        return selected_node_data;
      }
      return false;
    }
  }).fail(function() { 
    console.log('error, the request url was not found');
    return false;
  });
}

/**
 * this method set the basic value for pager and basic node data
 * @param string url
 * @param Array data *
 */
function setBasicValue(url, data){
  var pattIN=new RegExp(urlForNodeRelationIN);
  var pattOUT=new RegExp(urlForNodeRelationOUT);
  var pattSearchIN=new RegExp(urlForSearchNodeRelationIN);
  var pattSearchOUT=new RegExp(urlForSearchNodeRelationOUT);
  var pattPagerIN= new RegExp(urlForNodeRelationPagerIN);
  var pattPagerOUT= new RegExp(urlForNodeRelationPagerOUT);
  
  json_data= $.parseJSON(data);
  selected_node_data= json_data[':WS:RESPONSE'];
  pager_node_data_limit= json_data[':WS:PAGING'][':WS:PAGE-LIMIT'];
  //pager_node_data_selected= parseInt(json_data[':WS:PAGING'][':WS:PAGE-START'])+1;
  
  pager_node_data_in_count= 0;
  pager_node_data_out_count= 0;
  show_search_filter=false;
  how_pager=false;
  
  //console.log(json_data[':WS:STATUS']);
  if(pattIN.test(url) || pattSearchIN.test(url) || pattPagerIN.test(url)){
    pager_node_data_in_count= json_data[':WS:STATUS'][':WS:AFFECTED-COUNT'];
  }
  if(pattOUT.test(url) || pattSearchOUT.test(url) || pattPagerOUT.test(url)){
    pager_node_data_out_count= json_data[':WS:STATUS'][':WS:AFFECTED-COUNT'];
  }
}
/*
 * Nav bottom slider
 *
 */

var append_direction;
var position_layout;
var nav_length;
var create_new_nav_row;
var selected_nav_element= null;
var selected_nav_node_active;
var elemnt_list;


/**
 *
 *
 */
function startHistoryBind()
{
  //console.log('startHistoryBind');
  var button= $('#'+slider_destination_breadcrumb_history_container_button);
  button.click(function(){
    if(button.attr('class')=='dontshow'){
      $('#'+slider_destination_breadcrumb_history).slideDown('slow');
      button.val('Hide History');
      button.attr('class','show');
      button.addClass('nav_open');
    }else{
      $('#'+slider_destination_breadcrumb_history).slideUp('slow');
      button.val('Show History');
      button.attr('class','dontshow');
      button.removeClass('nav_open');
    }
  });
}

/**
 * Start the process
 */
function buildNav()
{
  //console.log('buildNav');
  createNavButton();
}

/**
 * check if the node is in the history
 * @param int node_id
 */
function startNav(node_id)
{
  //console.log('startNav');
  resetNavActiveElement();
  cloneNavToHistory();
  $('#'+slider_destination_breadcrumb+' ul#'+'nav_story_'+slider_destination_breadcrumb_ul+' li').remove();
  startBind(node_id, '');
}

/**
 * set the append direction ex:left or right
 * @param string direction
 */
function setAppendDirection(direction)
{
  //console.log('setAppendDirection');
  append_direction= direction;
}

/**
 * set the partial layout. It use the css class name
 * @param string layout
 */
function setPositionLayout(layout)
{
  //console.log('setPositionLayout');
  position_layout= layout;
}

function createNavButton()
{
  //console.log('createNavButton');
  if(append_direction == 'left')
    setPositionLayout(bottom_menu_layout_left_id);
  else
    setPositionLayout(bottom_menu_layout_right_id);
  
  resetNavActiveElement();
  checkNavElement();
}

function resetNavActiveElement()
{
  //console.log('resetNavActiveElement');
  selected_nav_node_active= $('#'+slider_destination_breadcrumb+' ul li a.active').attr('id');
  $('#'+slider_destination_breadcrumb+' ul li a.active').removeClass('active');
}

function checkNavElement()
{
  //console.log('checkNavElement');
  elemnt_list= $('#'+slider_destination_breadcrumb+' ul.breadcrumb li').length;
  if(elemnt_list > 0){
    $('#'+slider_destination_breadcrumb+' ul.breadcrumb li a').each(function(){
      if($(this).attr('id') == selected_node_predicate.replace(' ', '')+selected_node_id){
        selected_nav_element= selected_node_predicate.replace(' ', '')+selected_node_id;
        return false;
      }else if($(this).attr('id') == 'root_'+selected_node_id){
        selected_nav_element= 'root_'+selected_node_id;
        return false;
      }else{
        selected_nav_element= null;
        return true;
      }
    });
  }
  
  valorizeNav();
}

function valorizeNav()
{
  //console.log('valorizeNav');
  if(selected_nav_element){
    $('#'+selected_nav_element).addClass('active');
  }else{
    createActiveNavButtonLink();
  }
}

function createNewNavRow()
{
  //console.log('createNewNavRow');
  $('#'+slider_destination_breadcrumb).append('<ul id="nav_story_'+selected_node_id+'" class="breadcrumb"></ul>');
  slider_destination_breadcrumb_ul= selected_node_id;
  createActiveNavButtonLink();
}

function createActiveNavButtonLink()
{
  //console.log('createActiveNavButtonLink');
  var predicate= (selected_node_predicate !== undefined )? selected_node_predicate : 'root_';
  $('#'+position_layout+' a').addClass('active');
  $('#'+position_layout+' a').attr('onclick', 'javascript: startBind('+selected_node_id+',\''+selected_node_predicate+'\',\''+selected_node_direction+'\');');
  $('#'+position_layout+' a').attr('id', predicate.replace(' ', '')+selected_node_id);
  $('#'+position_layout+' a').html(selected_node_name);
  if(selected_node_predicate)
    $('#'+position_layout+' span.divider').html(selected_node_predicate);

  removeNode(append_direction);
  if(append_direction == 'right'){
    $('#'+slider_destination_breadcrumb+' ul#'+'nav_story_'+slider_destination_breadcrumb_ul).append($('#'+position_layout).html());
  }else{
    $('#'+slider_destination_breadcrumb+' ul#'+'nav_story_'+slider_destination_breadcrumb_ul).prepend($('#'+position_layout).html());
  }
  
  resetNavPartial();
}

function resetNavPartial()
{
  //console.log('resetNavPartial');
  $('#'+position_layout+' a').removeClass('active');
  $('#'+position_layout+' a').removeAttr('onclick');
  $('#'+position_layout+' a').removeAttr('id');
  $('#'+position_layout+' a').html('');
  $('#'+position_layout+' span.divider').html('');
}

function removeNode(append_direction)
{
  //console.log('removeNode');
  var selected_li      = $("li:has(a[id='"+selected_nav_node_active+"'])");
  var selected_li_span = $("li:has(a[id='"+selected_nav_node_active+"']) span");
  
  if(append_direction == 'right'){
    if(selected_li.next().length){
      cloneNavToHistory()
      selected_li_span.remove();
      selected_li.nextAll().each(function(){
        $(this).remove();
      });
    }
  }else{
    if(selected_li.prev().length){
      cloneNavToHistory();
      selected_li_span.remove();
      selected_li.prevAll().each(function(){
        $(this).remove();
      });
    }
  }
}

function cloneNavToHistory()
{
  //console.log('cloneNavToHistory');
  if($('#'+slider_destination_breadcrumb+' ul#'+'nav_story_'+slider_destination_breadcrumb_ul+' li').length > 0){
    var history_nav= $('#'+slider_destination_breadcrumb+' ul#'+'nav_story_'+slider_destination_breadcrumb_ul).clone();
    history_nav.removeAttr('id');
    $('#'+slider_destination_breadcrumb_history).prepend(history_nav);
    
    last_history= $('#'+slider_destination_breadcrumb_history+' ul').first();
    last_history.find('li').each(function(){
      $(this).addClass('child');
      var action= $(this).find('a').attr('onclick');
      var new_action= action.replace("startBind","startNav");
      $(this).find('a').attr('onclick', new_action);
    });
  }
}
/**
 * Node Class
 * 
 */

var selected_node_data;
var selected_node_name;
var selected_node_code;
var selected_node_id;
var selected_node_description;
var selected_node_predicate;
var selected_node_show_predicate= false;
var selected_node_code_local;
var selected_node_class;
var selected_node_direction;

function setNodeProperty(node_detail)
{
  //console.log('setNodeProperty');
  selected_node_name        = getNodeName(node_detail);
  selected_node_code        = getNodeCode(node_detail);
  selected_node_code_local  = getNodeLocalCode(node_detail);
  selected_node_description = getNodeDescription(node_detail);
  selected_node_class       = getNodeClass(node_detail);
  selected_node_kind        = getNodeKind(node_detail);
  selected_node_id          = getNodeId(node_detail);
}

function getRootNodeList()
{
  //console.log('getRootNodeList');
  ask(dev_stage+urlForRootNodes, generateRootMenu);
}

function getNodeById()
{
  //console.log('getNodeById');
  ask(dev_stage+urlForNodeDetails+'/'+selected_node_id, initializeNode);
}

function getNodeRelationINById(page)
{
  //console.log('getNodeRelationINById');
  ask(dev_stage+urlForNodeRelationIN+'/'+selected_node_id+ (page ? '/'+page: ''), generateNodeRelationIN);
}

function getNodeRelationOUTById(page)
{
  //console.log('getNodeRelationOUTById');
  ask(dev_stage+urlForNodeRelationOUT+'/'+selected_node_id+ (page ? '/'+page: ''), generateNodeRelationOUT);
}

function searchNodeRelationINById(term)
{
  //console.log('searchNodeRelationINById');
  ask(dev_stage+urlForSearchNodeRelationIN+'/'+selected_node_id+ (term ? '/'+term: ''), generateNodeRelationIN);
}

function searchNodeRelationOUTById(term)
{
  //console.log('searchNodeRelationOUTById');
  ask(dev_stage+urlForSearchNodeRelationOUT+'/'+selected_node_id+ (term ? '/'+term: ''), generateNodeRelationOUT);
}

function getNodeName(node)
{
  //console.log('getNodeName');
  return getDefaultLanguage(node[kTAG_LABEL]);
}

function getNodeId(node)
{
  //console.log('getNodeId');
  return node['_id'];
}

function getNodeTerm(node)
{
  //console.log('getNodeTerm');
  return (node[kTAG_TERM] !== undefined)? node[kTAG_TERM]: '';
}

function getNodeCode(node)
{
  //console.log('getNodeCode');
  return (node[kTAG_GID] !== undefined)? node[kTAG_GID]: '';
}

function getNodeLocalCode(node)
{
  //console.log('getNodeLocalCode');
  return (node[kTAG_LID] !== undefined)? node[kTAG_LID]: '';
}

function getNodeClass(node)
{
  //console.log('getNodeClass');
  return (node[kTAG_CLASS] !== undefined)? node[kTAG_CLASS]: '';
}

function getNodeImage(node)
{
  //console.log('getNodeImage');
  return '/bundles/bioversityontology/images/slider/default.png';
}

function getNodeDescription(node)
{
  //console.log('getNodeDescription');
  return getDefaultLanguage(node[kTAG_DESCRIPTION]);
  //return (node[kTAG_DESCRIPTION] !== undefined)? node[kTAG_DESCRIPTION]['en']: '';
}

function getNodePredicate(edge)
{
  //console.log('getNodePredicate');
  return (selected_node_data._term[edge[kTAG_PREDICATE]] !== undefined)?
            selected_node_data._term[edge[kTAG_PREDICATE]][kTAG_LABEL]['en']: '';
}

function getNodeDefinition(node)
{
  //console.log('getNodeDefinition');
  return (node[kTAG_DEFINITION] !== undefined)? node[kTAG_DEFINITION]['en']: '';
}

function getNodeKind(node)
{
  //console.log('getNodeKind');
  return (node[kTAG_KIND] !== undefined)? node[kTAG_KIND]: '';
}

function findNodePredicate(nodeId)
{
  //console.log('findNodePredicate');
  var predicate= null;
  //var pattReverter=new RegExp(" reverter");
  
  if(selected_node_data._edge[key][kTAG_VERTEX_OBJECT] == selected_node_id){
    setAppendDirection('right');
    predicate= getNodePredicate(value);
  }else if(selected_node_data._edge[key][kTAG_VERTEX_SUBJECT] == selected_node_id){
    setAppendDirection('left');
    predicate= getNodePredicate(value);
  }
  
  return predicate;
}

function setNodePredicate(predicate)
{
  //console.log('setNodePredicate');
  selected_node_predicate= predicate;
}

function setNodeId(node_id)
{
  //console.log('setNodeId');
  selected_node_id= node_id;
}

function getDefaultLanguage($language)
{
  if($language !== undefined){
    if($language['en'] !== undefined){
      return $language['en'];
    }else{
      if($language[0] !== undefined){
        return $language[0];
      }
      else{
        for (label in $language){
          return $language[label];
        }
      }
    }
  }else{
    return '';
  }
}

function isRoot(node)
{
  //console.log('isRoot');
  if(node[kTAG_DESCRIPTION][0] == ":ROOT")
    return true;
  else
    return false;
}
/**
 * Pager
 *
 */

var pager_node_data_limit;
var pager_node_data_in_count;
var pager_node_data_out_count;
var pager_node_data_selected= 1;
var pager_search_node_data_selected= 1;
var node_element_for_page= 10;

function createPager(request_result, destination)
{
  var pages= getPageNumber(request_result);
  
  if(pages > 0){
    $('#'+slider_pager_layout_id+' .node_record .total_page').html(pages);
    
    $('#'+slider_pager_layout_id+' .node_record input').attr('value', pager_node_data_selected);
    $('#'+slider_pager_layout_id+' .node_record input').attr('onChange', 'javascript: startPager(this.value,\''+destination+'\');');
    
    if((pager_node_data_selected) > 1){
      $('#'+slider_pager_layout_id+' .node_record .first_page').attr('onclick', 'javascript: startPager(1,\''+destination+'\');');
      $('#'+slider_pager_layout_id+' .node_record   .prev_page').attr('onclick', 'javascript: startPager('+(pager_node_data_selected-1)+',\''+destination+'\');');
    }
    if((pager_node_data_selected) < pages){
      $('#'+slider_pager_layout_id+' .node_record .last_page').attr('onclick', 'javascript: startPager('+(pages)+',\''+destination+'\');');
      $('#'+slider_pager_layout_id+' .node_record   .next_page').attr('onclick', 'javascript: startPager('+(pager_node_data_selected+1)+',\''+destination+'\');');
    }
    
    $('#'+destination+' .'+slider_destination_pager).append($('#'+slider_pager_layout_id+' .node_record').html());
  }
}

function startPager(page, destination)
{
  //console.log('startPager');
  resetPager();
  pager_node_data_selected= page;
  if(destination == slider_destination_left){
    resetLeft();
    getNodeRelationPagerINById(page);
  }
  else{
    resetRight();
    getNodeRelationPagerOUTById(page);
  }
}

function getPageNumber(request_result)
{
  //console.log('getPageNumber');
  return Math.ceil(request_result/pager_node_data_limit);
}

function resetPager()
{
  //console.log('resetPager');
  $('.'+slider_destination_pager).html(' ');
  $('#'+slider_pager_layout_id+' .node_record .first_page').removeAttr('onclick');
  $('#'+slider_pager_layout_id+' .node_record   .prev_page').removeAttr('onclick');
  $('#'+slider_pager_layout_id+' .node_record .last_page').removeAttr('onclick');
  $('#'+slider_pager_layout_id+' .node_record   .next_page').removeAttr('onclick');
}

function getNodeRelationPagerINById(page)
{
  //console.log('getRootNodeList');
  ask(dev_stage+urlForNodeRelationPagerIN+'/'+selected_node_id+ '/'+page, generateNodeRelationIN);
}

function getNodeRelationPagerOUTById(page)
{
  //console.log('getNodeRelationPagerOUTById');
  ask(dev_stage+urlForNodeRelationPagerOUT+'/'+selected_node_id+ '/'+page, generateNodeRelationOUT);
}

/**
 * Method for search tool
 *
 */

function setNodePager(node_list)
{
  var pages= Math.ceil(node_list[':WS:STATUS'][':WS:AFFECTED-COUNT']/node_element_for_page);
  createNodePager(pages);
}

function createNodePager(pages)
{
  if(pages > 0){
    $('#'+slider_pager_node_list_layout_id+' .node_record .total_page').html(pages);
    
    $('#'+slider_pager_node_list_layout_id+' .node_record input').attr('value', (pager_search_node_data_selected == 0)? 1: pager_search_node_data_selected);
    $('#'+slider_pager_node_list_layout_id+' .node_record input').attr('onChange', 'javascript: searchNode(this.value);');
    
    if(pager_search_node_data_selected > 1){
      $('#'+slider_pager_node_list_layout_id+' .node_record .first_page').attr('onclick', 'javascript: searchNode(1);');
      $('#'+slider_pager_node_list_layout_id+' .node_record   .prev_page').attr('onclick', 'javascript: searchNode('+(pager_search_node_data_selected-1)+');');
    }
    if(pager_search_node_data_selected < pages && pager_search_node_data_selected != 0){
      $('#'+slider_pager_node_list_layout_id+' .node_record .last_page').attr('onclick', 'javascript: searchNode('+(pages)+');');
      $('#'+slider_pager_node_list_layout_id+' .node_record   .next_page').attr('onclick', 'javascript: searchNode('+(parseInt(pager_search_node_data_selected, 10)+1)+');');
    }
    
    $('#'+slider_destination_search_node_pager_point).append($('#'+slider_pager_node_list_layout_id+' .node_record').html());
  }
}

function resetSearchPager()
{
  $('#'+slider_destination_search_node_pager_point).html(' ');
}
/**
 * Search
 *
 */

var start_search_bind= true;
var show_search_filter= true;

var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

function showSearchFilter(destination)
{
  //console.log('showSearchFilter');
  $('#'+destination+' .search_filter').fadeIn();
}

function startSearchBind()
{
  $('.search_filter').keyup(function (){
    var search_id= $(this).attr('id');
    var string= $(this).val();
    if(string.length >= 3){
      delay(function(){
        if(search_id === 'search_left'){
          resetLeft();
          resetPager();
          searchNodeRelationINById(string);
        }else{
          resetRight();
          resetPager();
          searchNodeRelationOUTById(string);
        }
      }, 1000 );
    }else if(string.length === 0){
      delay(function(){
        if(search_id === 'search_left'){
          resetLeft();
          resetPager();
          getNodeRelationINById(string);
        }else{
          resetRight();
          resetPager();
          getNodeRelationOUTById(string);
        }
      }, 1000 );
    }
  });
}

function createSearchPoint()
{
    $('#search_point').html('');
    $.ajax({
        url:        dev_stage+'/slider/partial/node/search/'+pager_search_node_data_selected,
        dataType:   "html",
        success: function( data ) {
           $('#search_point').append(data);
        }
     }).done( function(){
        buildTree();
        bindFormCheckbox();
        startAutocomplete('SliderSearchNode');
        startTooltip();
        bindSearchButton();
     });  
}

function bindSearchButton()
{
  $('#SliderSearchNode_search').click(function(event){
      event.preventDefault();
      searchNode(0);
  });
  
  $('#SliderSearchNode_clear').click(function(event){
    setActualForm('SliderSearchNode');
    unvalorizeAllField();
  });
}

function searchNode(page)
{
  resetSearchPager();
  hideSlider();
  pager_search_node_data_selected= page;
  $.ajax({
      type:       "POST",
      url:        dev_stage+'/slider/partial/node/search/'+(page),
      dataType:   "json",
      data:       $('#SliderSearchNode').serializeArray(),
      success: function( data ) {
        generateNodeList(data);
      }
  });
}
/**
 *	Slider configurator file.
 *
 *	There you can find the primary bind method an relations request method
 *
 *	@package	ontology slider
 *
 *	@author		Antonino Luca Carella <antonio.carella@gmail.com>
 *	@version	1.00
 */
function generateRootMenu()
{
  //console.log('generateRootMenu');
  $.each(selected_node_data._ids, function(key, value){
    createNodeMenuButton(
      top_menu_layout_id,
      getNodeName(selected_node_data._node[value]),
      getNodeCode(selected_node_data._node[value]),
      value
    );
  });
  //bindRootButton();
}

function generateNodeList(node_list)
{
  //console.log('generateNodeList');
  resetNodeList();
  showNodes();
  goToByScroll(slider_destination_search_node_list_point);
  if(node_list['term'][':WS:PAGING'][':WS:PAGE-COUNT'] > 0){
    setNodePager(node_list['term']);
    $.each(node_list['term'][':WS:RESPONSE'], function(key, value){
      createNodeList(
        value[kTAG_CLASS],
        value[kTAG_NID],
        value[kTAG_GID],
        value[kTAG_LABEL],
        value[kTAG_KIND]
      );
    });
  }else{
    displayNoResult();
  }
}

function hideSearch()
{
  $('#'+slider_destination_search_point+' form').hide();
}

function showSearch()
{
  $('#'+slider_destination_search_point+' form').fadeIn('slow');
}

function showNodes()
{
  $('#'+slider_destination_search_node_point).fadeIn('slow');
}

function hideNodes()
{
  $('#'+slider_destination_search_node_point).fadeOut('slow');
}

function hideSlider()
{
  $('#breadcrumb').hide();
  $('#history_container').hide();
  $('#slider').hide();
  $('#node_legend').hide();
}

function showSlider()
{
  $('#breadcrumb').fadeIn('slow');
  $('#history_container').fadeIn('slow');
  $('#slider').fadeIn('slow');
  $('#node_legend').fadeIn('slow');
}

function startBind(button, predicate, direction)
{
  //console.log('startBind');
  showSlider();
  setAppendDirection(direction);
  startButtonAnimation(button,predicate);
  goToByScroll('slider');
}

//function bindRootButton()
//{
//  $('#entry_point a').click(function(){
//    startBind($(this).attr('class'));
//  });
//}

function startButtonAnimation(button, predicate)
{
  //console.log('startButtonAnimation');
  $('#row_'+button).effect("transfer", { to: $('#'+slider_destination_center_header+' .btn_node') }, 300);
  startDetailAnimation(button, predicate);
}

function startDetailAnimation(button, predicate)
{
  //console.log('startDetailAnimation');
  $('#'+slider_destination_center).fadeOut('slow');
  bindButton(button, predicate);
}

function bindButton(button, predicate)
{
  //console.log('bindButton');
  setNodeId(button);
  setNodePredicate(predicate);
  getNodeById();
}

function initializeNode()
{
  //console.log('initializeNode');
  $.each(selected_node_data._ids, function(key, value){
    if(value == selected_node_id){
      setNodeProperty(selected_node_data._node[value]);
      resetSlider();
      createNodeDetail();
      buildNav();
    }
  });
  initializeNodeRelations();
}

function initializeNodeRelations()
{
  //console.log('initializeNodeRelations');
  getNodeRelationINById();
  getNodeRelationOUTById();
}

//function startButtonListAnimation()
//{
//  //console.log('startButtonListAnimation');
//  $(".btn_node_more").on('click', function(event) {
//    var $detail= $(this).parent();
//    event.stopPropagation();
//    
//    if($detail.attr('class')=='dontshow'){
//      $detail.find(".btn_node_more").html(' - show less');
//      $detail.find(".list_node_detail").slideDown('slow');
//      $detail.attr('class','startshow');
//    }else{
//      $detail.find(".list_node_detail").slideUp('slow');
//      $detail.find(".btn_node_more").html(' + show less');
//      $detail.attr('class','dontshow');
//    }
//    
//  });
//
//}

$(document).ready(function(){
    $(document).on('click',".btn_node_more", function() {
    var detail= $(this).parent();
    
    if(detail.attr('class')=='dontshow'){
      detail.find(".btn_node_more").html(' - show less');
      detail.find(".list_node_detail").slideDown('slow');
      detail.attr('class','startshow');
    }else{
      detail.find(".list_node_detail").slideUp('slow');
      detail.find(".btn_node_more").html(' + show less');
      detail.attr('class','dontshow');
    }
    
  });
});

function generateNodeRelationIN()
{
  //console.log('generateNodeRelationIN');
  if(selected_node_data){
    generateNodeRelations(slider_left_layout_id,slider_destination_left);
  }
}

function generateNodeRelationOUT()
{
  //console.log('generateNodeRelationOUT');
  if(selected_node_data){
    generateNodeRelations(slider_right_layout_id,slider_destination_right);
  }
}

function generateNodeRelations(layout, destination)
{
  //console.log('generateNodeRelations');
  var pager_count;
  
  $.each(selected_node_data._edge, function(key, value){
    if(value[kTAG_OBJECT] == selected_node_id){
      var node_id= value[kTAG_SUBJECT];
      var node_value= selected_node_data._node[node_id];
      select_node_direction='left';
      show_pager=true;
      show_search_filter= true;
      pager_count= pager_node_data_in_count;
    }else if(value[kTAG_SUBJECT] == selected_node_id){
      var node_id= value[kTAG_OBJECT];
      var node_value= selected_node_data._node[node_id];
      select_node_direction='right';
      show_pager=true;
      show_search_filter= true;
      pager_count= pager_node_data_out_count;
    }
    
    createNodeButton(
      layout,
      destination,
      getNodePredicate(value),
      getNodeName(node_value),
      getNodeCode(node_value),
      node_id,
      getNodeDescription(node_value),
      getNodeDefinition(node_value),
      getNodeKind(node_value),
      select_node_direction
    );
  });
  
  //startButtonListAnimation();
  
  if(show_pager===true){
    createPager(pager_count, destination);
  }
  
  if(show_search_filter===true){
    if(pager_count > 25){
      showSearchFilter(destination);
    
      if(start_search_bind===true){
        startSearchBind();
        start_search_bind=false;
      }
    }
  }
}

/**
 * This method group is used for reset the slider values
 *
 */
function resetSlider()
{
  //console.log('resetSlider');
  resetCenter();
  resetLeft();
  resetRight();
  resetPager();
  resetSearch();
}

function resetNodeList()
{
  //console.log('resetCenter');
  $('#'+slider_destination_search_node_list_point).html(' ');  
}

function resetCenter()
{
  //console.log('resetCenter');
  $('#'+slider_destination_center).html(' ');  
}

function resetLeft()
{
  //console.log('resetLeft');
  $('#'+slider_destination_left+' ul').html(' ');  
}

function resetRight()
{
  //console.log('resetRight');
  $('#'+slider_destination_right+' ul').html(' ');  
}

function resetSearch()
{
  $('.search_filter').fadeOut();
  $('.search_filter').val('');
}


/**
 * The following method are used to valorize the node data in the partials html slider
 *
 */
function createNodeMenuButton(layout, node_name, node_code, node_id)
{
  //console.log('createNodeMenuButton');
  //console.log(layout);
  $('#'+layout+' .node_record a').html(node_name);
  $('#'+layout+' .node_record a').attr('onclick', 'javascript: startNav('+node_id+');');
  //$('#'+layout+' .node_record a').attr('class', node_id);
  $('#'+slider_destination_root).append($('#nav_top_button .node_record').html());
}

function createNodeButton(layout, destination, predicate, node_name, node_code, node_id,node_description,node_definition, node_kind, direction)
{
  //console.log('createNodeButton');
  $('#'+layout+' .node_record .btn_node_predicate').html(predicate);
  $('#'+layout+' .node_record .btn_node_code').html(node_code);
  $('#'+layout+' .node_record .btn_node_name').html(node_name);
  $('#'+layout+' .node_record .btn_node_description').html(node_description);
  $('#'+layout+' .node_record .btn_node_definition').html(node_definition);
  $('#'+layout+' .node_record li').attr('id', 'row_'+node_id);
  $('#'+layout+' .node_record li').attr('style', 'display:none;');
  $('#'+layout+' .node_record .btn_node').attr('onclick', 'javascript: startBind('+node_id+',\''+predicate+'\',\''+direction+'\');');
  
  if(node_kind !== ''){
    var added_class= '';
    var divider=new RegExp(":");
    $.each(node_kind, function(key, value){
      if(divider.test(value))
        var html_class= value.replace(':', '');
      added_class += ' <span class="'+html_class+'" title=":'+html_class+'">■</span> ';
    });
    $('#'+layout+' .node_record .btn_node_code').html(node_code+added_class);
  }
    
  $('#'+destination+' ul.node_container').append($('#'+layout+' .node_record').html());
  $('#'+destination+' ul.node_container li').fadeIn('slow');
}

function displayNoResult()
{
  $('#'+slider_destination_search_node_list_point).append('<p>no node found</p>');
}

function createNodeList(node_class, node_nid, node_gid, node_label, node_kind)
{
  //console.log('createNodeMenuButton');
  $new_row= $('#'+slider_search_node_list_layout_id+' .node_record').clone();
  
  $new_row.find('li').addClass(node_class);
  $new_row.find('li').attr('onclick', 'javascript: startNav('+node_nid+');');
  $new_row.find('span.node_nid').html('NID '+node_nid);
  $new_row.find('span.node_label').html('LABEL '+node_label['en']);
  $new_row.find('span.node_gid').html('GID '+node_gid);
  
  if(node_kind !== undefined)
    $new_row.find('span.node_kind').html('KIND <br/>'+String(node_kind).replace(',','<br/>'));
  else
    $new_row.find('span.node_kind').html('');
  
  $('#'+slider_destination_search_node_list_point).append($($new_row).html());
}

function createNodeDetail()
{
  //console.log('createNodeDetail');
  $.each(selected_node_data._node[selected_node_id], function(arrayID,arrayValue) {
  if(arrayID !== '_id'){
      var label= selected_node_data._term[selected_node_data._tag[arrayID][kTAG_PATH][0]][kTAG_LABEL]['en'];
      if(arrayID == kTAG_LABEL){
        createNodeHeaderName(arrayValue['en']);
      }else if(arrayID == kTAG_GID){
        createNodeHeaderCode(checkArray(arrayValue));
      }else{
        $('#'+slider_center_layout_id+' .node_detail label' ).html(label);
        $('#'+slider_center_layout_id+' .node_detail span' ).html(checkArray(arrayValue));
        $('#'+slider_destination_center).append($('#'+slider_center_layout_id).html());
        $('#'+slider_center_layout_id+' .node_detail label' ).html('');
        $('#'+slider_center_layout_id+' .node_detail span' ).html('');
      }
    }
  });
  
  $('#'+slider_destination_center).fadeIn('slow');  
  $('#'+slider_destination_center_header).fadeIn('slow');
}

function createNodeHeaderName(node_name)
{
  //console.log('createNodeHeaderName');
  $('#'+slider_destination_center_header+' .btn_node_name').html(node_name+' ('+selected_node_id+')');
}

function createNodeHeaderCode(node_code)
{
  //console.log('createNodeHeaderCode');
  $('#'+slider_destination_center_header+' .btn_node_code').html(node_code);
  
  if(selected_node_kind !== ''){
    var added_class= '';
    $.each(selected_node_kind, function(key, value){
      var html_class= value.replace(':', '');
      added_class += ' <span class="'+html_class+'" title=":'+html_class+'">■</span> ';
    });
    $('#'+slider_destination_center_header+' .btn_node_code').html(node_code+added_class);
  }
}

function checkArray(arrayValue)
{
  //console.log('checkArray');
  var node_partial='';
  
  if($.isArray(arrayValue)){
    $.each(arrayValue, function(key,value){
      node_partial +=checkArray(value)+'<br/>';
    });
    return (node_partial['en'])? node_partial['en']: node_partial;
  }
  
  if($.isPlainObject(arrayValue)){
    $.each(arrayValue, function(key,value){
      node_partial +='<strong>'+key+': </strong>'+checkArray(value)+'<br/>';
    });
    return (node_partial['en'])? node_partial['en']: node_partial;
  }
  
  return arrayValue;
}
function buildTree()
{
    $('div.tree div.checkbox_option').each(function(){
        var labelText= $(this).text();
        var count = labelText.match(/___/g);
        var $inputId= $(this).find('input').attr('id');
        
        if(count){
            var $next= $(this).next().text().match(/___/g);
            if($next){
                if($next.length > count.length)
                    $(this).find('label').html('<span class="opener"> <strong> + </strong> </span>'+$(this).text());
                else
                    $(this).find('label').html('<span class="opener"> _</span>'+$(this).text());
            }
            $(this).attr('id', 'node'+$inputId+'_'+(count.length+1));
            $(this).addClass('children level_'+(count.length+1)+' closed');
            $(this).fadeOut('slow');
        }else{
            if($(this).next().text().match(/___/g))
                $(this).find('label').html('<span class="opener"> <strong> + </strong> </span>'+$(this).text());
            $(this).attr('id', 'node'+$inputId+'_'+'1');
            $(this).addClass('root level_1');
        }
    });    
}

function clearIndentation(label)
{
    return label.replace('___', '&nbsp;');
}

function bindFormCheckbox()
{
    $('div.tree div.checkbox_option input, .opener').click(function(){
        var $field= $(this).parents().find('div.tree').attr('id');        
        var $inputId= $(this).parent().attr('id');        
        var $exploded= $inputId.split('_');
        
        var level= parseInt($exploded[3], 10)+1;
        
        var open= false;
        var check= false;
        
        $('#'+$field+' .checkbox_option').each(function(){
            if($(this).attr('id') == $inputId){
                open= true;
            }
            if(check && ($(this).hasClass('root') || $(this).hasClass('level_'+(level-1)))){
                open= false;
            }
            if(open && $(this).hasClass('level_'+level)){
                if($(this).hasClass('closed')){
                    $(this).fadeIn();
                    $(this).removeClass('closed');
                    $(this).addClass('open');
                }else{
                    $(this).fadeOut();
                    $(this).removeClass('open');
                    $(this).addClass('closed');
                }
                check= true;
            }
        });
    });
}
var actualForm;
var previusForm;

function startAutocomplete(form)
{
    setActualForm(form);
    $("#"+form+"_"+kTAG_LID).autocomplete({
        search  : function(){$(this).addClass('working');},
        open    : function(){$(this).removeClass('working');},
        source: function( request, response ) {
            $.ajax({
                url: dev_stage+"/serverconnection/json/find/lid/"+getUrlParams(request.term, getNamespace(form)),
                dataType: "json",
                success: function( data ) {
                    if(data == ''){
                        unvalorizeField()
                    }else{
                        response( $.map( data, function( item ) {
                            return {
                                label: item.GID,
                                value: item.LID
                            }
                        }));
                    }
                }
            });
        },
        minLength: 1,
        select: function( event, ui ) {
                    if(ui.item){
                        getTermDetail(ui.item.value, ui.item.label);
                    }
                },
    });
     
    $( "#"+form+"_"+kTAG_NAMESPACE ).autocomplete({
        search  : function(){$(this).addClass('working');},
        open    : function(){$(this).removeClass('working');},
        source: function( request, response ) {
            $.ajax({
                url: dev_stage+"/serverconnection/json/find/namespace/"+request.term,
                dataType: "json",
                success: function( data ) {
                    if(data == ''){
                        unvalorizeField()
                    }else{
                        response( $.map( data, function( item ) {
                            return {
                                label: item.GID,
                                value: item.GID
                            }
                        }));
                    }
                }
            });
        },
        minLength: 1,
        select: function( event, ui ) {
                    //if(ui.item)
                        //getTermDetail(ui.item.value, ui.item.label);
                },
    });
    
    $( "#"+form+"_"+kTAG_LABEL ).autocomplete({
        search  : function(){$(this).addClass('working');},
        open    : function(){$(this).removeClass('working');},
        source: function( request, response ) {
            $.ajax({
                url: dev_stage+"/serverconnection/json/find/label/"+request.term,
                dataType: "json",
                success: function( data ) {
                    if(data == ''){
                        unvalorizeField()
                    }else{
                        response( $.map( data, function( item ) {
                            subvalue= item.GID;
                            return {
                                label: item.LABEL,
                                value: item.GID,
                            }
                        }));
                    }
                }
            });
        },
        minLength: 1,
        select: function( event, ui ) {
                    if(ui.item){
                        getTermDetail(ui.item.value, ui.item.value);
                    }
                },
    });
    
    $( "#"+form+"_"+kTAG_GID ).autocomplete({
        search  : function(){$(this).addClass('working');},
        open    : function(){$(this).removeClass('working');},
        source: function( request, response ) {
            $.ajax({
                url: dev_stage+"/serverconnection/json/find/gid/"+request.term,
                dataType: "json",
                success: function( data ) {
                    if(data == ''){
                        unvalorizeField()
                    }else{
                        response( $.map( data, function( item ) {
                            return {
                                label: item.LABEL,
                                value: item.GID,
                            }
                        }));
                    }
                }
            });
        },
        minLength: 1,
        select: function( event, ui ) {
                    if(ui.item){
                        getTermDetail(ui.item.value, ui.item.value);
                    }
                },
    });
     
}

function setActualForm(form){
    previusForm= actualForm;
    actualForm= form;
}

function getNamespace(htmlNode)
{
    return $( "#"+htmlNode+"_"+kTAG_NAMESPACE ).val();
}

function getUrlParams(lid, namespace)
{
    if(namespace == undefined || namespace == null || namespace == '')
        params= lid;
    else
        params= lid+'/'+namespace;
    
    return params;
}

function getTermDetail(term, gid)
{
    $.ajax({
        url: dev_stage+"/serverconnection/json/get/term/"+getUrlParams(gid),
        dataType: "json",
        success: function( data ) {
            var response= data;
            if(response !== undefined){
                unvalorizeAllField();
                var entity= response['_term'][gid];
                for(var key in entity)
                    valorizeField(key, entity[key]);
            }
            else
                unvalorizeField();
            
        }
    });
}

function valorizeField(key, entity)
{
    var $input= $('#'+actualForm+'_'+key);
    //if(key !== kTAG_LID && key !== kTAG_NAMESPACE){
        if($input.length > 0){
            if($.isPlainObject(entity)){
                $input.val(entity['en']);
            }else{
                $input.val(entity);
            }
        }
    //}
    if(actualForm != 'SliderSearchNode')
        lockField();
};

function unvalorizeField()
{
    $('#'+actualForm+' :input[readonly]').each(function(){
        $(this).val('');
    });
    unlockField();
};

function unvalorizeAllField()
{
    $('#'+actualForm+' :input:not(input[type=button],input[type=submit])').each(function(){
        if($(this).attr('id') !== actualForm+'__token')
            $(this).val('');
    });
    unlockField();
};

function lockField()
{
    $('#'+actualForm+' :input').each(function(){
        var $id=$(this).attr('id');
        if( $id !== actualForm+'_'+kTAG_LID && $id !== actualForm+'_'+kTAG_NAMESPACE)
            $(this).attr('readonly', 'readonly');
    });
    
    $('#'+actualForm+'_select').removeAttr('disabled');
    $('#'+actualForm+'_save').attr('disabled','disabled');
}

function unlockField()
{
    $('#'+actualForm+' :input[readonly]').each(function(){
        $(this).removeAttr('readonly');
    });
    $('#'+actualForm+'_save').removeAttr('disabled');
    $('#'+actualForm+'_select').attr('disabled','disabled');
}
/**
 * this methos is used to scroll at the called element in the page
 */

function calculateScroll(element){
  var scrollTop     = $(window).scrollTop(),
      elementOffset = $('#'+element).offset().top,
      distance      = (elementOffset - scrollTop);
      
  return scrollTop;
}
    
function goToByScroll(id){
  //$('html,body').animate({scrollTop: $("#"+id).offset().top - $('#menu_header').height() - 10 },'slow');
  $('html,body').animate({scrollTop: $("#"+id).offset().top - 10 },'slow');
}