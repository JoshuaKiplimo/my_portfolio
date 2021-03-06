// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import java.io.IOException;
import java.util.Date;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/JoshuaInfo")
public final class MyInfo extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
  
    // Convert  to JSON
   String[] info = {"Loves travelling and hiking", "Loves warm coffee", "Makes terrible puns"};
    // Send the JSON as the response
    String json = convertToJson(info);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  /**
   * Converts a ServerStats instance into a JSON string using manual String concatentation.
   */
  private String convertToJson(String info[]) {
    String json = "{";
    json += "\"one\": ";
    json += "\"" + info[0] + "\"";
    json += ", ";
    json += "\"two\": ";
    json += "\"" + info[1] + "\"";
    json += ", ";
    json += "\"three\": ";
    json += "\"" + info[2] + "\"";
    json += "}";
    return json;
  }

    
  }