/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const TrainRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrainRequest",
    modelProperties: {
      source: {
        constraints: {
          MaxLength: 2048
        },
        serializedName: "source",
        required: true,
        type: {
          name: "String"
        }
      },
      sourceFilter: {
        serializedName: "sourceFilter",
        type: {
          name: "Composite",
          className: "TrainSourceFilter"
        }
      },
      useLabelFile: {
        serializedName: "useLabelFile",
        type: {
          name: "Boolean"
        }
      },
      modelName: {
        serializedName: "modelName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrainSourceFilter: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrainSourceFilter",
    modelProperties: {
      prefix: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "prefix",
        type: {
          name: "String"
        }
      },
      includeSubfolders: {
        serializedName: "includeSubFolders",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ErrorResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorInformation"
        }
      }
    }
  }
};

export const ErrorInformation: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorInformation",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Model: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Model",
    modelProperties: {
      modelInfo: {
        serializedName: "modelInfo",
        type: {
          name: "Composite",
          className: "ModelInfo"
        }
      },
      keys: {
        serializedName: "keys",
        type: {
          name: "Composite",
          className: "KeysResult"
        }
      },
      trainResult: {
        serializedName: "trainResult",
        type: {
          name: "Composite",
          className: "TrainResult"
        }
      },
      composedTrainResults: {
        serializedName: "composedTrainResults",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TrainResult"
            }
          }
        }
      }
    }
  }
};

export const ModelInfo: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ModelInfo",
    modelProperties: {
      modelId: {
        serializedName: "modelId",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["creating", "ready", "invalid"]
        }
      },
      trainingStartedOn: {
        serializedName: "createdDateTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      trainingCompletedOn: {
        serializedName: "lastUpdatedDateTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      modelName: {
        serializedName: "modelName",
        type: {
          name: "String"
        }
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "Attributes"
        }
      }
    }
  }
};

export const Attributes: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Attributes",
    modelProperties: {
      isComposed: {
        serializedName: "isComposed",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const KeysResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeysResult",
    modelProperties: {
      clusters: {
        serializedName: "clusters",
        required: true,
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Sequence", element: { type: { name: "String" } } },
            constraints: { UniqueItems: true }
          }
        }
      }
    }
  }
};

export const TrainResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrainResult",
    modelProperties: {
      trainingDocuments: {
        serializedName: "trainingDocuments",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TrainingDocumentInfo"
            }
          }
        }
      },
      fields: {
        serializedName: "fields",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FormFieldsReport"
            }
          }
        }
      },
      averageModelAccuracy: {
        serializedName: "averageModelAccuracy",
        type: {
          name: "Number"
        }
      },
      modelId: {
        serializedName: "modelId",
        type: {
          name: "Uuid"
        }
      },
      errors: {
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorInformation"
            }
          }
        }
      }
    }
  }
};

export const TrainingDocumentInfo: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrainingDocumentInfo",
    modelProperties: {
      name: {
        serializedName: "documentName",
        required: true,
        type: {
          name: "String"
        }
      },
      pageCount: {
        serializedName: "pages",
        required: true,
        type: {
          name: "Number"
        }
      },
      errors: {
        serializedName: "errors",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorInformation"
            }
          }
        }
      },
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["succeeded", "partiallySucceeded", "failed"]
        }
      }
    }
  }
};

export const FormFieldsReport: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FormFieldsReport",
    modelProperties: {
      fieldName: {
        serializedName: "fieldName",
        required: true,
        type: {
          name: "String"
        }
      },
      accuracy: {
        serializedName: "accuracy",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SourcePath: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SourcePath",
    modelProperties: {
      source: {
        constraints: {
          MaxLength: 2048
        },
        serializedName: "source",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnalyzeOperationResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnalyzeOperationResult",
    modelProperties: {
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["notStarted", "running", "succeeded", "failed"]
        }
      },
      createdOn: {
        serializedName: "createdDateTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      lastModified: {
        serializedName: "lastUpdatedDateTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      analyzeResult: {
        serializedName: "analyzeResult",
        type: {
          name: "Composite",
          className: "AnalyzeResult"
        }
      }
    }
  }
};

export const AnalyzeResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnalyzeResult",
    modelProperties: {
      version: {
        serializedName: "version",
        required: true,
        type: {
          name: "String"
        }
      },
      readResults: {
        serializedName: "readResults",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ReadResult"
            }
          }
        }
      },
      pageResults: {
        serializedName: "pageResults",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PageResult"
            }
          }
        }
      },
      documentResults: {
        serializedName: "documentResults",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentResult"
            }
          }
        }
      },
      errors: {
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorInformation"
            }
          }
        }
      }
    }
  }
};

export const ReadResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ReadResult",
    modelProperties: {
      pageNumber: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "page",
        required: true,
        type: {
          name: "Number"
        }
      },
      angle: {
        constraints: {
          InclusiveMaximum: 180,
          ExclusiveMinimum: -180
        },
        serializedName: "angle",
        required: true,
        type: {
          name: "Number"
        }
      },
      width: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "width",
        required: true,
        type: {
          name: "Number"
        }
      },
      height: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "height",
        required: true,
        type: {
          name: "Number"
        }
      },
      unit: {
        serializedName: "unit",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["pixel", "inch"]
        }
      },
      lines: {
        serializedName: "lines",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TextLine"
            }
          }
        }
      },
      selectionMarks: {
        serializedName: "selectionMarks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SelectionMark"
            }
          }
        }
      }
    }
  }
};

export const TextLine: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TextLine",
    modelProperties: {
      text: {
        serializedName: "text",
        required: true,
        type: {
          name: "String"
        }
      },
      boundingBox: {
        constraints: {
          MinItems: 8,
          MaxItems: 8
        },
        serializedName: "boundingBox",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      words: {
        serializedName: "words",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TextWord"
            }
          }
        }
      },
      appearance: {
        serializedName: "appearance",
        type: {
          name: "Composite",
          className: "TextAppearance"
        }
      }
    }
  }
};

export const TextWord: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TextWord",
    modelProperties: {
      text: {
        serializedName: "text",
        required: true,
        type: {
          name: "String"
        }
      },
      boundingBox: {
        constraints: {
          MinItems: 8,
          MaxItems: 8
        },
        serializedName: "boundingBox",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      confidence: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "confidence",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const TextAppearance: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TextAppearance",
    modelProperties: {
      style: {
        serializedName: "style",
        type: {
          name: "Composite",
          className: "TextStyle"
        }
      }
    }
  }
};

export const TextStyle: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TextStyle",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      confidence: {
        serializedName: "confidence",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SelectionMark: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SelectionMark",
    modelProperties: {
      boundingBox: {
        constraints: {
          MinItems: 8,
          MaxItems: 8
        },
        serializedName: "boundingBox",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      confidence: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "confidence",
        required: true,
        type: {
          name: "Number"
        }
      },
      state: {
        serializedName: "state",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PageResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PageResult",
    modelProperties: {
      pageNumber: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "page",
        required: true,
        type: {
          name: "Number"
        }
      },
      clusterId: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "clusterId",
        type: {
          name: "Number"
        }
      },
      keyValuePairs: {
        serializedName: "keyValuePairs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "KeyValuePair"
            }
          }
        }
      },
      tables: {
        serializedName: "tables",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataTable"
            }
          }
        }
      }
    }
  }
};

export const KeyValuePair: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyValuePair",
    modelProperties: {
      label: {
        serializedName: "label",
        type: {
          name: "String"
        }
      },
      key: {
        serializedName: "key",
        type: {
          name: "Composite",
          className: "KeyValueElement"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Composite",
          className: "KeyValueElement"
        }
      },
      confidence: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "confidence",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const KeyValueElement: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyValueElement",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      text: {
        serializedName: "text",
        required: true,
        type: {
          name: "String"
        }
      },
      boundingBox: {
        constraints: {
          MinItems: 8,
          MaxItems: 8
        },
        serializedName: "boundingBox",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      elements: {
        serializedName: "elements",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const DataTable: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataTable",
    modelProperties: {
      rows: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "rows",
        required: true,
        type: {
          name: "Number"
        }
      },
      columns: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "columns",
        required: true,
        type: {
          name: "Number"
        }
      },
      cells: {
        serializedName: "cells",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataTableCell"
            }
          }
        }
      },
      boundingBox: {
        constraints: {
          MinItems: 8,
          MaxItems: 8
        },
        serializedName: "boundingBox",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const DataTableCell: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataTableCell",
    modelProperties: {
      rowIndex: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "rowIndex",
        required: true,
        type: {
          name: "Number"
        }
      },
      columnIndex: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "columnIndex",
        required: true,
        type: {
          name: "Number"
        }
      },
      rowSpan: {
        defaultValue: 1,
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "rowSpan",
        type: {
          name: "Number"
        }
      },
      columnSpan: {
        defaultValue: 1,
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "columnSpan",
        type: {
          name: "Number"
        }
      },
      text: {
        serializedName: "text",
        required: true,
        type: {
          name: "String"
        }
      },
      boundingBox: {
        constraints: {
          MinItems: 8,
          MaxItems: 8
        },
        serializedName: "boundingBox",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      confidence: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "confidence",
        required: true,
        type: {
          name: "Number"
        }
      },
      elements: {
        serializedName: "elements",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      isHeader: {
        serializedName: "isHeader",
        type: {
          name: "Boolean"
        }
      },
      isFooter: {
        serializedName: "isFooter",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const DocumentResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DocumentResult",
    modelProperties: {
      docType: {
        serializedName: "docType",
        required: true,
        type: {
          name: "String"
        }
      },
      modelId: {
        serializedName: "modelId",
        type: {
          name: "Uuid"
        }
      },
      pageRange: {
        constraints: {
          MinItems: 2,
          MaxItems: 2
        },
        serializedName: "pageRange",
        required: true,
        type: {
          name: "Sequence",
          element: {
            constraints: {
              InclusiveMinimum: 1
            },
            type: {
              name: "Number"
            }
          }
        }
      },
      docTypeConfidence: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "docTypeConfidence",
        type: {
          name: "Number"
        }
      },
      fields: {
        serializedName: "fields",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "FieldValue" } }
        }
      }
    }
  }
};

export const FieldValue: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FieldValue",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "string",
            "date",
            "time",
            "phoneNumber",
            "number",
            "integer",
            "array",
            "object",
            "selectionMark",
            "countryRegion"
          ]
        }
      },
      valueString: {
        serializedName: "valueString",
        type: {
          name: "String"
        }
      },
      valueDate: {
        serializedName: "valueDate",
        type: {
          name: "Date"
        }
      },
      valueTime: {
        serializedName: "valueTime",
        type: {
          name: "String"
        }
      },
      valuePhoneNumber: {
        serializedName: "valuePhoneNumber",
        type: {
          name: "String"
        }
      },
      valueNumber: {
        serializedName: "valueNumber",
        type: {
          name: "Number"
        }
      },
      valueInteger: {
        serializedName: "valueInteger",
        type: {
          name: "Number"
        }
      },
      valueArray: {
        serializedName: "valueArray",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FieldValue"
            }
          }
        }
      },
      valueObject: {
        serializedName: "valueObject",
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "FieldValue" } }
        }
      },
      valueSelectionMark: {
        serializedName: "valueSelectionMark",
        type: {
          name: "String"
        }
      },
      valueCountryRegion: {
        serializedName: "valueCountryRegion",
        type: {
          name: "String"
        }
      },
      text: {
        serializedName: "text",
        type: {
          name: "String"
        }
      },
      boundingBox: {
        constraints: {
          MinItems: 8,
          MaxItems: 8
        },
        serializedName: "boundingBox",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      confidence: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "confidence",
        type: {
          name: "Number"
        }
      },
      elements: {
        serializedName: "elements",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      pageNumber: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "page",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const CopyRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CopyRequest",
    modelProperties: {
      targetResourceId: {
        constraints: {
          Pattern: new RegExp(
            "^/subscriptions/[^/]*/resourceGroups/[^/]*/providers/Microsoft.CognitiveServices/accounts/[^/]*$"
          ),
          MaxLength: 1024
        },
        serializedName: "targetResourceId",
        required: true,
        type: {
          name: "String"
        }
      },
      targetResourceRegion: {
        constraints: {
          Pattern: new RegExp("^[a-z0-9]+$"),
          MaxLength: 24,
          MinLength: 1
        },
        serializedName: "targetResourceRegion",
        required: true,
        type: {
          name: "String"
        }
      },
      copyAuthorization: {
        serializedName: "copyAuthorization",
        type: {
          name: "Composite",
          className: "CopyAuthorizationResult"
        }
      }
    }
  }
};

export const CopyAuthorizationResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CopyAuthorizationResult",
    modelProperties: {
      modelId: {
        serializedName: "modelId",
        required: true,
        type: {
          name: "String"
        }
      },
      accessToken: {
        serializedName: "accessToken",
        required: true,
        type: {
          name: "String"
        }
      },
      expirationDateTimeTicks: {
        serializedName: "expirationDateTimeTicks",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const CopyOperationResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CopyOperationResult",
    modelProperties: {
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["notStarted", "running", "succeeded", "failed"]
        }
      },
      createdOn: {
        serializedName: "createdDateTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      lastModified: {
        serializedName: "lastUpdatedDateTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      copyResult: {
        serializedName: "copyResult",
        type: {
          name: "Composite",
          className: "CopyResult"
        }
      }
    }
  }
};

export const CopyResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CopyResult",
    modelProperties: {
      modelId: {
        serializedName: "modelId",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      errors: {
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorInformation"
            }
          }
        }
      }
    }
  }
};

export const ComposeRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ComposeRequest",
    modelProperties: {
      modelIds: {
        serializedName: "modelIds",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Uuid"
            }
          }
        }
      },
      modelName: {
        serializedName: "modelName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Models: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Models",
    modelProperties: {
      summary: {
        serializedName: "summary",
        type: {
          name: "Composite",
          className: "ModelsSummary"
        }
      },
      modelList: {
        serializedName: "modelList",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ModelInfo"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ModelsSummary: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ModelsSummary",
    modelProperties: {
      count: {
        serializedName: "count",
        required: true,
        type: {
          name: "Number"
        }
      },
      limit: {
        serializedName: "limit",
        required: true,
        type: {
          name: "Number"
        }
      },
      lastModified: {
        serializedName: "lastUpdatedDateTime",
        required: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const GeneratedClientTrainCustomModelAsyncHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientTrainCustomModelAsyncHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientAnalyzeWithCustomModelHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientAnalyzeWithCustomModelHeaders",
    modelProperties: {
      operationLocation: {
        serializedName: "operation-location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientCopyCustomModelHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientCopyCustomModelHeaders",
    modelProperties: {
      operationLocation: {
        serializedName: "operation-location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientGenerateModelCopyAuthorizationHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientGenerateModelCopyAuthorizationHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientComposeCustomModelsAsyncHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientComposeCustomModelsAsyncHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientAnalyzeBusinessCardAsyncHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientAnalyzeBusinessCardAsyncHeaders",
    modelProperties: {
      operationLocation: {
        serializedName: "operation-location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientAnalyzeInvoiceAsyncHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientAnalyzeInvoiceAsyncHeaders",
    modelProperties: {
      operationLocation: {
        serializedName: "operation-location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientAnalyzeIdDocumentAsyncHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientAnalyzeIdDocumentAsyncHeaders",
    modelProperties: {
      operationLocation: {
        serializedName: "operation-location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientAnalyzeReceiptAsyncHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientAnalyzeReceiptAsyncHeaders",
    modelProperties: {
      operationLocation: {
        serializedName: "operation-location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientAnalyzeLayoutAsyncHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientAnalyzeLayoutAsyncHeaders",
    modelProperties: {
      operationLocation: {
        serializedName: "operation-location",
        type: {
          name: "String"
        }
      }
    }
  }
};
