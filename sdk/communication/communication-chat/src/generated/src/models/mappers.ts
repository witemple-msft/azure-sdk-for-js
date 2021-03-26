/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const ChatMessageReadReceiptsCollection: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatMessageReadReceiptsCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatMessageReadReceipt"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ChatMessageReadReceipt: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatMessageReadReceipt",
    modelProperties: {
      senderCommunicationIdentifier: {
        serializedName: "senderCommunicationIdentifier",
        type: {
          name: "Composite",
          className: "CommunicationIdentifierModel"
        }
      },
      chatMessageId: {
        serializedName: "chatMessageId",
        required: true,
        type: {
          name: "String"
        }
      },
      readOn: {
        serializedName: "readOn",
        required: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const CommunicationIdentifierModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationIdentifierModel",
    modelProperties: {
      rawId: {
        serializedName: "rawId",
        type: {
          name: "String"
        }
      },
      communicationUser: {
        serializedName: "communicationUser",
        type: {
          name: "Composite",
          className: "CommunicationUserIdentifierModel"
        }
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        type: {
          name: "Composite",
          className: "PhoneNumberIdentifierModel"
        }
      },
      microsoftTeamsUser: {
        serializedName: "microsoftTeamsUser",
        type: {
          name: "Composite",
          className: "MicrosoftTeamsUserIdentifierModel"
        }
      }
    }
  }
};

export const CommunicationUserIdentifierModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationUserIdentifierModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PhoneNumberIdentifierModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PhoneNumberIdentifierModel",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MicrosoftTeamsUserIdentifierModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MicrosoftTeamsUserIdentifierModel",
    modelProperties: {
      userId: {
        serializedName: "userId",
        required: true,
        type: {
          name: "String"
        }
      },
      isAnonymous: {
        serializedName: "isAnonymous",
        type: {
          name: "Boolean"
        }
      },
      cloud: {
        serializedName: "cloud",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CommunicationErrorResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ChatError"
        }
      }
    }
  }
};

export const ChatError: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatError",
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
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatError"
            }
          }
        }
      },
      innerError: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "ChatError"
        }
      }
    }
  }
};

export const SendReadReceiptRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendReadReceiptRequest",
    modelProperties: {
      chatMessageId: {
        serializedName: "chatMessageId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SendChatMessageRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendChatMessageRequest",
    modelProperties: {
      content: {
        serializedName: "content",
        required: true,
        type: {
          name: "String"
        }
      },
      senderDisplayName: {
        serializedName: "senderDisplayName",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SendChatMessageResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SendChatMessageResult",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ChatMessagesCollection: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatMessagesCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatMessage"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ChatMessage: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatMessage",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      sequenceId: {
        serializedName: "sequenceId",
        required: true,
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        required: true,
        type: {
          name: "String"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "Composite",
          className: "ChatMessageContent"
        }
      },
      senderDisplayName: {
        serializedName: "senderDisplayName",
        type: {
          name: "String"
        }
      },
      createdOn: {
        serializedName: "createdOn",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      senderCommunicationIdentifier: {
        serializedName: "senderCommunicationIdentifier",
        type: {
          name: "Composite",
          className: "CommunicationIdentifierModel"
        }
      },
      deletedOn: {
        serializedName: "deletedOn",
        type: {
          name: "DateTime"
        }
      },
      editedOn: {
        serializedName: "editedOn",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ChatMessageContent: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatMessageContent",
    modelProperties: {
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      topic: {
        serializedName: "topic",
        type: {
          name: "String"
        }
      },
      participants: {
        serializedName: "participants",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatParticipant"
            }
          }
        }
      },
      initiatorCommunicationIdentifier: {
        serializedName: "initiatorCommunicationIdentifier",
        type: {
          name: "Composite",
          className: "CommunicationIdentifierModel"
        }
      }
    }
  }
};

export const ChatParticipant: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatParticipant",
    modelProperties: {
      communicationIdentifier: {
        serializedName: "communicationIdentifier",
        type: {
          name: "Composite",
          className: "CommunicationIdentifierModel"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      shareHistoryTime: {
        serializedName: "shareHistoryTime",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const UpdateChatMessageRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateChatMessageRequest",
    modelProperties: {
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ChatParticipantsCollection: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatParticipantsCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatParticipant"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AddChatParticipantsRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddChatParticipantsRequest",
    modelProperties: {
      participants: {
        serializedName: "participants",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatParticipant"
            }
          }
        }
      }
    }
  }
};

export const AddChatParticipantsResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddChatParticipantsResult",
    modelProperties: {
      invalidParticipants: {
        serializedName: "invalidParticipants",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatError"
            }
          }
        }
      }
    }
  }
};

export const CreateChatThreadRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateChatThreadRequest",
    modelProperties: {
      topic: {
        serializedName: "topic",
        required: true,
        type: {
          name: "String"
        }
      },
      participants: {
        serializedName: "participants",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatParticipant"
            }
          }
        }
      }
    }
  }
};

export const CreateChatThreadResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateChatThreadResult",
    modelProperties: {
      chatThread: {
        serializedName: "chatThread",
        type: {
          name: "Composite",
          className: "ChatThreadProperties"
        }
      },
      invalidParticipants: {
        serializedName: "invalidParticipants",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatError"
            }
          }
        }
      }
    }
  }
};

export const ChatThreadProperties: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatThreadProperties",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      topic: {
        serializedName: "topic",
        required: true,
        type: {
          name: "String"
        }
      },
      createdOn: {
        serializedName: "createdOn",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      createdByCommunicationIdentifier: {
        serializedName: "createdByCommunicationIdentifier",
        type: {
          name: "Composite",
          className: "CommunicationIdentifierModel"
        }
      },
      deletedOn: {
        serializedName: "deletedOn",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ChatThreadsItemCollection: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatThreadsItemCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ChatThreadItem"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ChatThreadItem: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChatThreadItem",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      topic: {
        serializedName: "topic",
        required: true,
        type: {
          name: "String"
        }
      },
      deletedOn: {
        serializedName: "deletedOn",
        type: {
          name: "DateTime"
        }
      },
      lastMessageReceivedOn: {
        serializedName: "lastMessageReceivedOn",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const UpdateChatThreadRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateChatThreadRequest",
    modelProperties: {
      topic: {
        serializedName: "topic",
        type: {
          name: "String"
        }
      }
    }
  }
};
