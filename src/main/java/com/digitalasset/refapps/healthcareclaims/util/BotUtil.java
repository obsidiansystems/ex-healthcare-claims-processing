/**
 * Copyright (c) 2019, Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package com.digitalasset.refapps.healthcareclaims.util;

import com.daml.ledger.javaapi.data.Template;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import org.pcollections.PMap;

public class BotUtil {

  public static <T extends Template, Cid> Map<Cid, T> filterTemplates(
      Class<T> type, PMap<String, Template> contracts, Function<String, Cid> cidFactory) {
    HashMap<Cid, T> m = new HashMap<>();
    contracts.forEach(
        (s, c) -> {
          if (type.isInstance(c)) {
            T t = type.cast(c);
            m.put(cidFactory.apply(s), t);
          }
        });
    return m;
  }
}
